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
import { IUser } from '../../models/user.model';
import conversationApi from '../../api/conversationApi';
import { toast } from 'react-toastify';
import config from '../../config';
import { useSockets } from '../../context/socket.context';

const cx = classNames.bind(styles);
const Messenger = () => {
  const { user } = useAppSelector(selectAuth);
  const [activeMessenger, setActiveMessenger] = useState(false);
  const [conversation, setConversation] = useState<IConversation | undefined>(undefined);
  const [loadingGetMessage, setLoadingGetMessage] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [receiver, setReceiver] = useState<IUser | undefined>(undefined);

  const { socket } = useSockets();
  const messageInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  console.log(socket.id);
  useEffect(() => {
    socket.on(config.socketEvents.SERVER.GET_MESSAGE, ({ message }: { message: IMessage }) => {
      setMessages((prev) => {
        const lastPrevMessage = prev[prev.length - 1];
        if (
          lastPrevMessage &&
          user?._id !== message.sender._id &&
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
      setReceiver(conversation?.members.find((member) => member._id !== user?._id));
      try {
        const params = {
          page: 1,
          limit: 0,
          sort: 'createdAt',
        };
        setLoadingGetMessage(true);
        const res: IMessage[] = await messageApi.getMessagesFromConversation(
          conversation?._id || '',
          params,
        );
        console.log(res);
        if (res) {
          setMessages(res);
          setLoadingGetMessage(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    conversation && getMessages();
  }, [conversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (conversation && receiver?._id === messages[messages.length - 1].sender._id) {
      handleUpdateSeenMessage(conversation?._id, receiver?._id);
    }
  }, [messages, activeMessenger]);

  const handleUpdateSeenMessage = async (conversation: string, receiverId: string) => {
    try {
      const res = await messageApi.updateSeenMessage(conversation, receiverId);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleClickConversation = (conversation: IConversation) => {
  //   const receiverId = conversation.members.find((member) => member._id !== user?._id)?._id || '';
  //   handleUpdateSeenMessage(conversation._id, receiverId);
  //   setCurrentChat(conversation);
  // };
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage) {
      try {
        const message: IMessage = await messageApi.create({
          conversation: conversation?._id,
          sender: user?._id,
          text: newMessage,
        });
        if (message) {
          setMessages((prev) => [...prev, message]);
          socket.emit(config.socketEvents.CLIENT.SEND_MESSAGE, {
            message,
            receiverId: receiver?._id,
          });
          setNewMessage('');
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
  // console.log('current: ', conversation);
  // console.log('message: ', messages);
  console.log(activeMessenger);

  console.log('====================================');
  return (
    <div className={cx('container')}>
      {activeMessenger ? (
        <div className={cx('messenger', activeMessenger && 'active')}>
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
                <p className={cx('active-text')}>Active now</p>
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
          <div className={cx('messenger__body')}>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className={cx('icon', 'emoji')}>
                <FaSmile />
              </div>
            </div>

            <button onClick={handleSendMessage} className={cx('chat-submit')}>
              <FaPaperPlane />
            </button>
          </form>
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
        </div>
      )}
    </div>
  );
};

export default Messenger;
