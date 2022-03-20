import HTTPTransport from '../api/HTTPTransport';
import {snakeToCamel, camelToSnake} from '../utils/snakeCamel';

const host = 'https://ya-praktikum.tech/api/v2/user';

const userApi = new HTTPTransport(host);

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

class UserApi {
    private userInfo: XMLHttpRequest | string | null = null;

    changeUserProfile(data: userRequest) {
        const dataFormSnakel = camelToSnake(data);
        const options = {
            data: JSON.stringify(dataFormSnakel),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return userApi.put('/profile', options);
    }

    changeUserAvatar(form: FormData) {
        const options = {
            data: form,
            isFormData: true,
        };
        return userApi.put('/profile/avatar', options);
    }

    changeUserPassword(data: changePasswordRequest) {
        const options = {
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return userApi.put('/password', options);
    }
    searchUser(data) {
        const options = {
            data: JSON.stringify({login: data}),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return userApi.post('/search', options);
    }
    getUserId(id: number) {
        return userApi.get(`/${id}`);
    }
}
export default UserApi;
