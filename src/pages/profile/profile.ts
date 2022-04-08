import Block from '../../utils/block';
import {render} from 'pug';
import Button from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';
import TextLink from '../../components/text-link/textLink';
import template from './profile.tmpl';
import Profile from '../../components/profile';
import Form from '../../components/form';
import images from '../../../static/img/l.jpg';
import AuthAPI from '../../api/authApi';
import {snakeToCamel} from '../../utils/snakeCamel';
import BackPanel from "../../components/back-panel";
import NavigationPanel from "../../components/navigation-panel";

const formTmpl = `
form
    #inputEmail
    #inputLogin
    #inputFirstName
    #inputSecondName
    #inputDisplayName
    #inputPhone
    #textLink
    .group-elements
        #button
`;

export default class PageProfile extends Block {
    _userName: string | unknown;

    constructor() {
        const _template = template;
        document.title = 'profileSetting';

        const _profile = new Profile({
            name: '',
            srcImg: images,
        });

			const backPanel = new BackPanel({
				back: '/chats',
			});

        const _form = new Form({
            page: 'profileSetting',
            getUserInfo: () => this.getUserInfo(),
            template: formTmpl,
            children: {
                inputEmail: new Input({
                    type: 'email',
                    name: 'email',
                    value: '',
                    label: 'Почта',
                    placeholder: 'Введите почту',
                }),

                inputLogin: new Input({
                    type: 'text',
                    name: 'login',
                    value: '',
                    label: 'Логин',
                    placeholder: 'Введите логин',
                }),

                inputFirstName: new Input({
                    type: 'text',
                    name: 'firstName',
                    value: '',
                    label: 'Имя',
                    placeholder: 'Введите имя',
                }),

                inputSecondName: new Input({
                    type: 'text',
                    name: 'secondName',
                    value: '',
                    label: 'Фамилия',
                    placeholder: 'Введите фамилию',
                }),

                inputDisplayName: new Input({
                    type: 'text',
                    name: 'displayName',
                    value: '',
                    label: 'Имя в чате',
                    placeholder: 'Введите имя для чата',
                }),
                inputPhone: new Input({
                    type: 'tel',
                    name: 'phone',
                    value: '',
                    label: 'Телефон',
                    placeholder: 'Введите номер телефона',
                }),
                textLink: new TextLink({
                    text: 'Пароль',
                    title: 'Изменить пароль',
                    link: '/password-change',
                }),

                button: new Button({
                    title: 'Сохранить изменения',
                    type: 'submit',
                }),

                link: new Link({
                    title: 'Назад',
                    link: '/chats',
                }),
            },
        });

        super({
            template: _template,
            children: {
								backPanel: backPanel,
								navigationPanel: new NavigationPanel(),
                profile: _profile,
                form: _form,
            },
        });
        this._userName = '';
    }
    componentDidMount(): void {
        this.getUserInfo();
    }

    getUserInfo() {
        new AuthAPI().getUserInfo()
            .then((data) => {
                const userInfo = JSON.parse(data.response);
                const info = snakeToCamel(userInfo);
                const {
                    avatar,
                    displayName,
                    email,
                    firstName,
                    login,
                    phone,
                    secondName,
                } = info;

                const profile = this.props.children?.profile;
                const form = this.props.children?.form;
                const {
                    inputEmail,
                    inputLogin,
                    inputFirstName,
                    inputSecondName,
                    inputDisplayName,
                    inputPhone,
                } = form?.props.children;
                this._userName = login;

                profile?.setProps({
                    name: login,
                    srcImg: avatar || images,
                });
                inputEmail.setProps({
                    value: email,
                });
                inputLogin.setProps({
                    value: login,
                });
                inputFirstName.setProps({
                    value: firstName,
                });
                inputSecondName.setProps({
                    value: secondName,
                });
                inputDisplayName.setProps({
                    value: displayName,
                });
                inputPhone.setProps({
                    value: phone,
                });
            });
    }

    render(): string {
        return render(template);
    }
}
