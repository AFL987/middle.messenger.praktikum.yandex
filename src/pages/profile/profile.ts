import Block from '../../utils/block';
import {render} from 'pug';
import Button from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';
import TextLink from '../../components/text-link/textLink';
import template from './profile.tmpl';
import Profile from '../../components/profile';
import Form from '../../components/form';
import images from '../../../static/img/*.png';
import AuthAPI from '../../api/authApi';
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
        #link
        #button
`;

export default class PageProfile extends Block {
    constructor() {
        const _template = template;
        document.title = 'profileSetting';

        const _profile = new Profile({
						name: 'John Les',
            srcImg: images.L,
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
										text: '',
										title: 'Изменить пароль',
                    link: '/password-change',
                }),

                button: new Button({
                    title: 'Сохранить',
                    type: 'submit',
                }),
            },
        });

        super({
            template: _template,
            children: {
                profile: _profile,
								backPanel: backPanel,
								navigationPanel: new NavigationPanel(),
                form: _form,
            },
        });
    }
    componentDidMount(): void {
        this.getUserInfo()
    }

    getUserInfo() {
        new AuthAPI().getUserInfo()
            .then((data) => {
                const userInfo = JSON.parse(data.response);
                const {
                    avatar,
                    display_name,
                    email,
                    first_name,
                    login,
                    phone,
                    second_name,
                } = userInfo;

                const {profile, form} = this.props.children;
                const {
                    inputEmail,
                    inputLogin,
                    inputFirstName,
                    inputSecondName,
                    inputDisplayName,
                    inputPhone,
                } = form.props.children;
                this._userName = login;

                profile.setProps({
                    name: login,
                    srcImg: avatar || images.L,
                });
                inputEmail.setProps({
                    value: email,
                });
                inputLogin.setProps({
                    value: login,
                });
                inputFirstName.setProps({
                    value: first_name,
                });
                inputSecondName.setProps({
                    value: second_name,
                });
                inputDisplayName.setProps({
                    value: display_name,
                });
                inputPhone.setProps({
                    value: phone,
                });
            });
    }

    render(): string {
        const {template} = this.props;
        return render(template);
    }
}
