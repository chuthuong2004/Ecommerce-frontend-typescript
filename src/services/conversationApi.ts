import { axiosClient } from '@/api';
import { IConversation } from '@/models';

const conversationApi = {
  create: (body: { receiverId: string }): Promise<IConversation> => {
    const url = 'conversations/new';
    return axiosClient.post(url, body);
  },
  getMyConversation: (): Promise<IConversation[]> => {
    const url = 'conversations';
    return axiosClient.get(url);
  },
  updateConversation: (conversationId: string): Promise<IConversation> => {
    const url = `conversations/${conversationId}`;
    return axiosClient.put(url);
  },
};
export default conversationApi;
