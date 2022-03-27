import Block from '../../utils/block';
import {render} from 'pug';
import {PropsPage} from '../../utils/types';
import router from '../../index';
import AuthApi from '../../api/authApi';
import Button from '../../components/button';
import TitleAuth from '../../components/title-auth';
import Input from '../../components/input';
import template from './signIn.tmpl';
import Link from '../../components/link';
import Form from '../../components/form';
import NavigationPanel from "../../components/navigation-panel";

const formTmpl = `
form
    #inputLogin
    #inputPassword
    .group-elements
        #button
        #link
`;
export default class PageSignIn extends Block {
    constructor(props: PropsPage) {
        document.title = 'pageSignIn';
				const _template = template;
        const _titleAuth = new TitleAuth({
					title: 'Вход'
				})

        const _form = new Form({
            page: 'pageSignIn',
            template: formTmpl,
            children: {
                inputLogin: new Input({
                    type: 'text',
                    name: 'login',
                    value: '',
                    label: 'Логин',
                    placeholder: 'Введите логин',
                }),

                inputPassword: new Input({
                    type: 'password',
                    name: 'password',
                    value: '',
                    label: 'Пароль',
                    placeholder: 'Введите пароль',
                }),

                button: new Button({
                    title: 'Вход',
                    type: 'submit',
                }),

								link: new Link({
									title: 'Создать пользователя?',
									link: '/signup',
								}),
            },
        });

        super({
            ...props,
            template: _template,
            children: {
								titleAuth: _titleAuth,
								navigationPanel: new NavigationPanel(),
                form: _form,
            },
        });
    }

    render(): string {
        const {template} = this.props;

        new AuthApi().getUserInfo()
            .then((result) => {
                const userInfo = JSON.parse(result.response);
                if (!userInfo.reason) {
                    router.go('/chats');
                }
            }).catch((er) => {
                console.error(er);
            });
        return render(template);
    }
}
