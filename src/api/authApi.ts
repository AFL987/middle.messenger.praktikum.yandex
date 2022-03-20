import HTTPTransport from '../api/HTTPTransport';
import {snakeToCamel, camelToSnake} from '../utils/snakeCamel';

const host = 'https://ya-praktikum.tech/api/v2/auth';

const authApi = new HTTPTransport(host);

type SignUpRequest = {
    firstName: string,
    secondName: string,
    login: string,
    email: string,
    password: string,
    phone: string,
}

class AuthAPI {
    private userInfo: XMLHttpRequest | string | null = null;

    signUp(data: SignUpRequest) {
        const dataFormSnakel = camelToSnake(data);
        const options = {
            data: JSON.stringify(dataFormSnakel),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return authApi.post('/signup', options);
    }

    signIn(data: Record<string, FormDataEntryValue>) {
        const dataFormSnakel = camelToSnake(data);
        const options = {
            data: JSON.stringify(dataFormSnakel),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return authApi.post('/signin', options);
    }

    getUserInfo() {
        return authApi.get('/user');
    }

    logout() {
        return authApi.post('/logout');
    }
}
export default AuthAPI;
