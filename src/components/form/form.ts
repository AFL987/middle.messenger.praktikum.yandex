import {render} from 'pug';
import Block from '../../utils/block';
import {verificationSubmitValues} from '../../utils/verificationSubmitValues';
import AuthApi from '../../api/authApi';
import UserApi from '../../api/userApi';
import router from '../../index';
import {SignUpRequest, userRequest, changePasswordRequest} from '../../api/types';
import {Events} from '../../utils/types';

type Props = {
    children?: Record<string, any>;
    className?: string;
    events?: Events;
    page: string;
    template: string;
    getUserInfo?: () => void;
}

export default class Form extends Block {
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

    submit(event: Event) {
        const {page} = this.props;
        const element = event.target as HTMLFormElement;
        const result = this.validValues(element, page);
        switch (page) {
            case 'pageSignIn':
                this.isAuthUserIn(result as SignUpRequest);
                break;
            case 'pageSignUp':
                this.isAuthUserUp(result as SignUpRequest);
                break;
            case 'pagePasswordChange':
                this.isChangePassword(result as changePasswordRequest);
                break;
            case 'profileSetting':
                this.isChangeUserProfile(result as userRequest);
                break;
            default:
                break;
        }
    };

    isAuthUserUp(value: SignUpRequest): void {
        new AuthApi().signUp(value)
            .then((data) => {
                const userInfo = JSON.parse(data.response);
                router.go('/chats');
                console.log(userInfo);
            }).catch((err) => {
                console.error(err);
            });
    }
    isAuthUserIn(value: Record<string, string>): void {
        new AuthApi().signIn(value)
            .then(() => {
                router.go('/chats');
            })
            .then(() => {
                new AuthApi().getUserInfo()
                    .then((result) => {
                        const userInfo = JSON.parse(result.response);
                        console.log(userInfo);
                    });
            })
    }

    isChangeUserProfile(data: userRequest): void {
        new UserApi().changeUserProfile(data)
            .then(() => {
                this.props?.getUserInfo();
                router.go('/chats');
            }).catch((err) => {
                console.error(err);
            });
    }
    isChangePassword(data: changePasswordRequest): void {
        delete data.passwordRepeat;
        new UserApi().changeUserPassword(data)
            .then(() => {
                router.go('/chats');
            }).catch((err) => {
                console.error(err);
            });
    }
    validValues(e: HTMLFormElement, pageName: string) {
        const result = verificationSubmitValues(e, pageName);
        return result;
    }

    render(): string {
        return render(this.props.template);
    }
}
