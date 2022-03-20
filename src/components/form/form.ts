import {render} from 'pug';
import Block from '../../utils/block';
import {verificationSubmitValues} from '../../utils/verificationSubmitValues';
import AuthApi from '../../api/authApi';
import UserApi from '../../api/userApi';
import router from '../../index';

type Events = {
    [key: string]: {tagEvent: string, callback: ((...args) => unknown)}
}

type Props = {
    children?: {[key: string]: HTMLElement},
    className?: string;
    events?: Events;
    page?: string;
    template?: string;
}

export default class Form extends Block {
    props: Props;
    constructor(props: Props) {
        const events: Events = {
            submit: {
                tagEvent: 'form',
                callback: (e) => {
                    e.preventDefault();
                    this.submit(e);
                },
            },
        };
        super({
            ...props,
            className: props.className || 'form',
            events,
        });
    }

    submit(e) {
        const {page} = this.props;
        const result = this.validValues(e.target, page);
        switch (page) {
            case 'pageSignIn':
                this.isAuthUserIn(result);
                break;
            case 'pageSignUp':
                this.isAuthUserUp(result);
                break;
            case 'pagePasswordChange':
                this.isChangePassword(result)
                break;
            case 'profileSetting':
                this.isChangeUserProfile(result);
                break;
            default:
                break;
        }
    };

    isAuthUserUp(value): void {
        new AuthApi().signUp(value)
            .then((data) => {
                const userInfo = JSON.parse(data.response);
            }).catch((err) => {
                console.error(err);
            });
    }
    isAuthUserIn(value): void {
        new AuthApi().signIn(value)
            .then((data) => {
                router.go('/chats');
            })
            .then(() => {
                new AuthApi().getUserInfo()
                    .then((result) => {
                        const userInfo = JSON.parse(result.response);
                    });
            }).catch((err) => {
                console.error(err);
            });
    }

    isChangeUserProfile(data): void {
        new UserApi().changeUserProfile(data)
            .then((data) => {
                this.props.getUserInfo();
                router.go('/chats');
            }).catch((err) => {
                console.error(err);
            });
    }
    isChangePassword(data): void {
        delete data.passwordRepeat;
        new UserApi().changeUserPassword(data)
            .then((data) => {
                router.go('/chats');
            }).catch((err) => {
                console.error(err);
            });
    }
    validValues(e: Event, pageName: string | unknown): {[x: string]: string} | undefined {
        const result = verificationSubmitValues(e, pageName);
        return result;
    }

    render(): string {
        const {template} = this.props;
        return render(template);
    }
}
