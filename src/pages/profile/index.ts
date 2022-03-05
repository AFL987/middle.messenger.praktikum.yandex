import Button from '../../components/button';
import Input from '../../components/input';
import PageProfile from './profile';
import Link from '../../components/link';
import TextLink from '../../components/text-link/textLink';
import template from './profile.tmpl';
import Profile from '../../components/profile';
import Form from '../../components/form';
import images from '../../../static/img/*.png';
import BackPanel from "../../components/back-panel";

const formTmpl = `
.form
    #inputEmail
    #inputLogin
    #inputFirstName
    #inputLastName
    #inputFirstNameChat
    #inputPhone
    #textLink
    .group-elements
        #link
        #button
`;

new PageProfile({
    title: 'profileSetting',
    template: template,
    children: {
        profile: new Profile({
            name: 'John Les',
            srcImg: images.L,
        }).getContent(),

				backPanel: new BackPanel({
					back: '/pages/home/index.html',
				}).getContent(),

        form: new Form({
            template: formTmpl,
            children: {
                inputEmail: new Input({
                    type: 'email',
                    name: 'email',
                    value: 'fyu678@mail.ru',
                    label: 'Почта',
                    placeholder: 'Введите почту',
                }).getContent(),

                inputLogin: new Input({
                    type: 'text',
                    name: 'login',
                    value: 'fyu678',
                    label: 'Логин',
                    placeholder: 'Введите логин',
                }).getContent(),

                inputFirstName: new Input({
                    type: 'text',
                    name: 'firstName',
                    value: 'Петр',
                    label: 'Имя',
                    placeholder: 'Введите имя',
                }).getContent(),

                inputLastName: new Input({
                    type: 'text',
                    name: 'lastName',
                    value: 'Михайлов',
                    label: 'Фамилия',
                    placeholder: 'Введите фамилию',
                }).getContent(),

                inputFirstNameChat: new Input({
                    type: 'text',
                    name: 'firstNameChat',
                    value: 'Петр',
                    label: 'Имя в чате',
                }).getContent(),

								inputPhone: new Input({
									type: 'tel',
									name: 'phone',
									value: '89999999999',
									label: 'Телефон',
									placeholder: 'Введите телефон',
								}).getContent(),

                textLink: new TextLink({
                    text: '',
                    title: 'Изменить пароль',
                    href: '../password-change/index.html',
                }).getContent(),

                button: new Button({
                    title: 'Сохранить',
                    type: 'submit',
                }).getContent(),

            },
        }).getContent(),
    },
});
