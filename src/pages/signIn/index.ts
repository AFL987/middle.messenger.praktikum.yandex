import Button from '../../components/button';
import TitleAuth from '../../components/title-auth';
import Input from '../../components/input';
import template from './signIn.tmpl';
import PageSignIn from './signIn';
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

new PageSignIn({
    title: 'pageSignIn',
    template: template,
    children: {

				navigationPanel: new NavigationPanel().getContent(),

        titleAuth: new TitleAuth({
            title: 'Вход'
        }).getContent(),

        form: new Form({
            template: formTmpl,
            children: {
                inputLogin: new Input({
                    type: 'text',
                    name: 'login',
                    value: '',
                    label: 'Логин',
                    placeholder: 'Введите логин',
                }).getContent(),

                inputPassword: new Input({
                    type: 'password',
                    name: 'password',
                    value: '',
                    label: 'Пароль',
                    placeholder: 'Введите пароль',
                }).getContent(),

                button: new Button({
                    title: 'Вход',
                    type: 'submit',
                }).getContent(),

								link: new Link({
									title: 'Создать пользователя?',
									href: '/pages/signUp/index.html',
								}).getContent(),
            }
        }).getContent(),
    },
});
