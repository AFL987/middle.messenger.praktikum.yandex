import HTTPTransport from '../api/HTTPTransport';

const host = 'https://ya-praktikum.tech/api/v2/chats';

const chatsApi = new HTTPTransport(host);

type userRequest = {
    firstName: string,
    secondName: string,
    displayName: string,
    login: string,
    email: string,
    phone: string,
}

type changePasswordRequest = {
    oldPassword: string,
    newPassword: string,
}

class ChatsApi {
    private userInfo: XMLHttpRequest | string | null = null;

    getChats() {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return chatsApi.get('/', options);
    }

    createChat(data: string) {
        const options = {
            data: JSON.stringify({title: data}),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return chatsApi.post('/', options);
    }

    deleteChat(id: number) {
        const options = {
            data: JSON.stringify({chatId: id}),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return chatsApi.delete('/', options);
    }

    getChatUsers(id: number) {
        return chatsApi.get(`/${id}/users`);
    }

    getNewMessageCount(id: number) {
        return chatsApi.get(`/new/${id}`);
    }

    addUsersChat(userId: number, chatId: number) {
        const options = {
            data: JSON.stringify({users: [userId], chatId}),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return chatsApi.put(`/users`, options);
    }

    deleteUsersChat(userId: number, chatId: number) {
        const options = {
            data: JSON.stringify({users: [userId], chatId}),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return chatsApi.delete(`/users`, options);
    }

    getChatUsersToken(id: number) {
        return chatsApi.post(`/token/${id}`);
    }
}
export default ChatsApi;
