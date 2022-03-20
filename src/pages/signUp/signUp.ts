import Block from '../../utils/block';
import {render} from 'pug';
import {PropsPage} from '../../utils/types';
import Button from '../../components/button';
import Input from '../../components/input';
import template from './signUp.tmpl';
import Form from '../../components/form';
import NavigationPanel from "../../components/navigation-panel";

const formTmpl = `
form
    #inputEmail
    #inputLogin
    #inputFirstName
    #inputLastName
    #inputPhone
    #inputPassword
    #inputPasswordRepeat
    .group-elements
        #button
    .error
`;


export default class PageSignUp extends Block {
    constructor(props: PropsPage) {
        const _template = template;
        document.title = 'pageSignUp';

        const _form = new Form({
            page: 'pageSignUp',
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

                inputLastName: new Input({
                    type: 'text',
                    name: 'secondName',
                    value: '',
                    label: 'Фамилия',
                    placeholder: 'Введите фамилию',
                }),

                inputPhone: new Input({
                    type: 'tel',
                    name: 'phone',
                    value: '',
                    label: 'Телефон',
                    placeholder: 'Введите телефон',
                }),

                inputPassword: new Input({
                    type: 'password',
                    name: 'password',
                    value: '',
                    label: 'Пароль',
                    placeholder: 'Введите пароль',
                }),

                inputPasswordRepeat: new Input({
                    type: 'password',
                    name: 'passwordRepeat',
                    value: '',
                    label: 'Повторите пароль',
                    placeholder: 'Введите пароль',
                }),

                button: new Button({
                    title: 'Создать пользователя',
                    type: 'submit',
                }),
            },
        });

        super({
            template: _template,
            children: {
								navigationPanel: new NavigationPanel(),
                form: _form,
            },
        });
    }

    render(): string {
        const {template} = this.props;
        return render(template);
    }
}
