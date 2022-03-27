import HTTPTransport from '../api/HTTPTransport';
import {camelToSnake} from '../utils/snakeCamel';
import {SignUpRequest} from './types';

const host = 'https://ya-praktikum.tech/api/v2/auth';

const authApi = new HTTPTransport(host);

class AuthAPI {
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
