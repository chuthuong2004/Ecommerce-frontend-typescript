import React, { useEffect, useState, useRef } from 'react';
import styles from './Messenger.module.scss';
import classNames from 'classnames/bind';

import {
  FaFileImage,
  FaGift,
  FaInfoCircle,
  FaPaperclip,
  FaPaperPlane,
  FaPhone,
  FaPlusCircle,
  FaSmile,
  FaVideo,
} from 'react-icons/fa';
import { BsFillTelephoneFill, BsFillCameraVideoFill, BsDashLg } from 'react-icons/bs';
import Message from '../Message';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../features/authSlice';
import { IMessage } from '../../models/message.model';
import { IConversation } from '../../models/conversation.model';
import messageApi from '../../api/messageApi';
import { FileResponse, IUser } from '../../models/user.model';
import conversationApi from '../../api/conversationApi';
import { toast } from 'react-toastify';
import config from '../../config';
import { useSockets } from '../../context/socket.context';
import { MdClose } from 'react-icons/md';
import axiosClient from '../../api/axiosClient';
import Button from '../Button';
import { CloseIcon } from '../Icons';
import moment from 'moment';
require('moment/locale/vi');

const cx = classNames.bind(styles);
const Messenger = () => {
  const { user } = useAppSelector(selectAuth);
  const [activeMessenger, setActiveMessenger] = useState(false);
  const [conversation, setConversation] = useState<IConversation | undefined>(undefined);
  const [loadingGetMessage, setLoadingGetMessage] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [receiver, setReceiver] = useState<IUser | undefined>(undefined);
  const [fileImages, setFileImages] = useState<File[]>([]);
  const [currentPageYOffset, setCurrentPageYOffset] = useState({
    page: 2,
    height: 0,
  });
  const { socket } = useSockets();
  const messageInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  console.log(socket.id);
  useEffect(() => {
    socket.on(config.socketEvents.SERVER.GET_MESSAGE, ({ message }: { message: IMessage }) => {
      message.sender._id !== user?._id && setReceiver(message.sender);
      setMessages((prev) => {
        const lastPrevMessage = prev[prev.length - 1];
        if (
          lastPrevMessage &&
          // user?._id !== message.sender._id &&
          lastPrevMessage.conversation === message.conversation &&
          lastPrevMessage._id !== message._id
        ) {
          return [...prev, message];
        }
        return prev;
      });
    });
  }, []);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const res: IConversation[] = await conversationApi.getMyConversation();
        console.log(res[0]);
        if (res) {
          setReceiver(res[0]?.members.find((member) => member._id !== user?._id));
          setConversation(res[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchConversation();
  }, [user?._id]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const params = {
          page: 1,
          limit: 10,
          // sort: 'createdAt',
        };
        setLoadingGetMessage(true);
        const res = await messageApi.getMessagesFromConversation(conversation?._id || '', params);
        console.log(res);
        if (res.data.length > 0) {
          setMessages(res.data);
          setLoadingGetMessage(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    conversation && activeMessenger && getMessages();
  }, [conversation, activeMessenger]);
  useEffect(() => {
    if (activeMessenger && !conversation) {
      const handleCreateNewConversation = async () => {
        try {
          const res = await conversationApi.create({ receiverId: 'admin' });
          if (res) {
            setReceiver(res?.members.find((member) => member._id !== user?._id));
            setConversation(res);
          }
        } catch (error) {
          console.log(error);
        }
      };
      user?._id && handleCreateNewConversation();
    } else {
      setMessages([]);
      setCurrentPageYOffset({ page: 2, height: 0 });
    }
  }, [activeMessenger, conversation, user?._id]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (
      conversation &&
      activeMessenger &&
      messages &&
      receiver &&
      receiver?._id === messages[messages.length - 1]?.sender?._id
    ) {
      handleUpdateSeenMessage(conversation?._id, receiver?._id);
    }
  }, [messages, receiver]);

  const handleUpdateSeenMessage = async (conversation: string, receiverId: string) => {
    try {
      const res = await messageApi.updateSeenMessage(conversation, receiverId);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    let createMessage: {
      conversation?: string;
      sender?: string;
      text: string;
      images?: string[];
    } = {
      conversation: conversation?._id,
      sender: user?._id,
      text: '',
    };
    if (fileImages.length > 0) {
      let formData = new FormData();
      fileImages.map((image) => {
        formData.append('imageMessage', image);
      });
      const res = await axiosClient.post('/upload/messages', formData);
      console.log(res.data.imageMessage);
      const images = res.data.imageMessage.map(
        (image: FileResponse) => '/public/messages/' + image.filename,
      );
      createMessage.images = images;
    }
    console.log(createMessage);

    if (newMessage || (createMessage?.images && createMessage?.images?.length > 0)) {
      try {
        if (newMessage) createMessage.text = newMessage;
        const message: IMessage = await messageApi.create(createMessage);
        if (message) {
          // setMessages((prev) => [...prev, message]);
          socket.emit(config.socketEvents.CLIENT.SEND_MESSAGE, {
            message,
            receiverId: receiver?._id,
          });
          setNewMessage('');
          setFileImages([]);
          messageInputRef.current?.focus();
        }
      } catch (error) {}
    } else {
      toast.info('Vui lòng nhập thông tin');
    }
  };
  const handleKeyDown = () => {
    socket.emit(config.socketEvents.CLIENT.KEY_DOWN, {
      isKeyPressedDown: true,
      senderId: user?._id || '',
      conversationId: conversation?._id || '',
      receiverId: receiver?._id || '',
    });
  };
  const handleRemoveImageFile = (file: File) => {
    setFileImages((prev) => {
      return prev.filter((fileImage) => fileImage !== file);
    });
  };
  const handleScroll = async (e: any) => {
    console.log(e.target.scrollTop);
    setCurrentPageYOffset({ ...currentPageYOffset, height: e.target.scrollTop });
    console.log({ e: e.target.scrollTop, b: currentPageYOffset });

    if (e.target.scrollTop === 0 && e.target.scrollTop < currentPageYOffset.height) {
      try {
        const params = {
          page: currentPageYOffset.page,
          limit: 10,
          skip: messages.length,
        };
        console.log(params);

        // setLoadingGetMessage(true);
        const res = await messageApi.getMessagesFromConversation(conversation?._id || '', params);
        console.log(res);
        if (res.data.length > 0) {
          const isExist = messages.find((message) => message._id === res.data[0]._id);
          if (res.resultPerPage === currentPageYOffset.page && !isExist) {
            setCurrentPageYOffset({ ...currentPageYOffset, page: currentPageYOffset.page + 1 });
            setMessages((prev) => [...res.data, ...prev]);
          }
          // setLoadingGetMessage(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handlePasteClipboard = (e: any) => {
    if (e.clipboardData.files[0] as File) {
      setFileImages((prev) => {
        const isExist = prev.find(
          (fileImage) => fileImage.size === (e.clipboardData.files[0] as File).size,
        );
        if (isExist) {
          return prev;
        }
        return [...prev, e.clipboardData.files[0] as File];
      });
    }
  };
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    // socket.emit(config.socketEvents.CLIENT.KEY_DOWN, {
    //   isKeyPressedDown: true,
    //   senderId: user?._id || '',
    //   conversationId: conversation?._id || '',
    //   receiverId: receiver?._id || '',
    // });
  };
  console.log('receiver: ', receiver?.username);

  console.log('====================================');
  return (
    <div className={cx('container')}>
      {activeMessenger ? (
        <div className={cx('messenger', activeMessenger && 'active')}>
          {user ? (
            <>
              <div className={cx('messenger__header')}>
                <div className={cx('messenger__header-info')}>
                  <div className={cx('avatar')}>
                    <img
                      src={receiver?.avatar ? process.env.REACT_APP_API_URL + receiver.avatar : ''}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className={cx('name')}>
                      {receiver?.firstName
                        ? receiver.firstName + ' ' + receiver.lastName
                        : receiver?.username}
                    </p>
                    <p className={cx('active-text')}>
                      {receiver?.loggedOut
                        ? `Hoạt động ${moment(receiver?.loggedOutAt).fromNow()}`
                        : 'Đang hoạt động'}
                    </p>
                  </div>
                </div>
                <div className={cx('messenger__header-actions')}>
                  <div className={cx('icon')}>
                    <BsFillTelephoneFill />
                  </div>
                  <div className={cx('icon')}>
                    <BsFillCameraVideoFill />
                  </div>
                  <div onClick={() => setActiveMessenger(false)} className={cx('icon')}>
                    <BsDashLg />
                  </div>
                </div>
              </div>
              <div
                ref={messageContainerRef}
                className={cx('messenger__body')}
                onScroll={handleScroll}
              >
                {messages.map((message) => (
                  <div ref={scrollRef} key={message._id}>
                    <Message message={message} own={message?.sender?._id === user?._id} />
                  </div>
                ))}
              </div>
              <form className={cx('messenger__footer')}>
                <div className={cx('icon')}>
                  <FaPlusCircle />
                </div>
                {/* <div className={cx('icon')}>
                        <FaFileImage />
                      </div>
                      <div className={cx('icon')}>
                        <FaPaperclip />
                      </div>
                      <div className={cx('icon')}>
                        <FaGift />
                      </div> */}
                <div className={cx('chat-input')}>
                  <input
                    ref={messageInputRef}
                    className={cx('input')}
                    name="message"
                    placeholder="Aa"
                    value={newMessage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewMessage(e.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    onPaste={handlePasteClipboard}
                    onBlur={handleBlur}
                  />
                  {fileImages.length > 0 && (
                    <div className={cx('prev-image-container')}>
                      {fileImages.map((fileImage, i) => (
                        <div className={cx('chat-image-input')} key={i}>
                          <img src={URL.createObjectURL(fileImage)} alt="" />
                          <span
                            onClick={() => handleRemoveImageFile(fileImage)}
                            className={cx('close-icon')}
                          >
                            <MdClose />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className={cx('icon', 'emoji')}>
                    <FaSmile />
                  </div>
                </div>

                <button onClick={handleSendMessage} className={cx('chat-submit')}>
                  <FaPaperPlane />
                </button>
              </form>
            </>
          ) : (
            <div className={cx('require-login')}>
              <div>
                <Button primary to={config.routes.login}>
                  Vui lòng đăng nhập
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => setActiveMessenger(true)}
          id="messenger"
          className={cx('icon-wrapper', activeMessenger && 'closed')}
        >
          <div className={cx('icon')}>
            <div className={cx('c')}>
              <span></span>
              <span className={cx('line-short')}></span>
            </div>
          </div>
          <span className={cx('new-message')}></span>
        </div>
      )}
    </div>
  );
};

export default Messenger;
