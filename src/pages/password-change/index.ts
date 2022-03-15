import Button from '../../components/button';
import Input from '../../components/input';
import PagePasswordChange from './passwordChange';
import Link from '../../components/link';
import template from './passwordChange.tmpl';
import Profile from '../../components/profile';
import Form from '../../components/form';
import images from '../../../static/img/*.png';
import BackPanel from "../../components/back-panel";
import NavigationPanel from "../../components/navigation-panel";

const formTempl = `
form
    #inputOldPassword
    #inputNewPassword
    #inputNewPasswordRepeat
    .group-elements
        #link
        #button
`;

new PagePasswordChange({
    title: 'pagePasswordChange',
    template: template,
    children: {

				navigationPanel: new NavigationPanel().getContent(),

        profile: new Profile({
            name: 'John Les',
            srcImg: images.L,
        }).getContent(),

				backPanel: new BackPanel({
					back: '/pages/profile/index.html',
				}).getContent(),

        form: new Form({
            page: 'pagePasswordChange',
            template: formTempl,
            children: {
                inputOldPassword: new Input({
                    type: 'password',
                    name: 'oldPassword',
                    value: '',
                    label: 'Старый пароль',
                    placeholder: 'Введите пароль',
                }).getContent(),

                inputNewPassword: new Input({
                    type: 'password',
                    name: 'password',
                    value: '',
                    label: 'Новый пароль',
                    placeholder: 'Введите пароль',
                }).getContent(),

                inputNewPasswordRepeat: new Input({
                    type: 'password',
                    name: 'passwordRepeat',
                    value: '',
                    label: 'Повторить новый пароль',
                    placeholder: 'Введите пароль',
                }).getContent(),

                button: new Button({
                    title: 'Сохранить',
                    type: 'submit',
                }).getContent(),
            },
        }).getContent(),
    },
});
