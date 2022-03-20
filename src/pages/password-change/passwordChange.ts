import Block from '../../utils/block';
import {render} from 'pug';
import {PropsPage} from '../../utils/types';
import Button from '../../components/button';
import Input from '../../components/input';
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

export default class PagePasswordChange extends Block {
    constructor(props: PropsPage) {
        const _template = template;
        document.title = 'pagePasswordChange';
        const _profile = new Profile({
            name: 'Загрузка данных',
            srcImg: images.L,
        });

				const backPanel = new BackPanel({
					back: '/profile',
				});

        const _form = new Form({
            page: 'pagePasswordChange',
            template: formTempl,
            children: {
                inputOldPassword: new Input({
                    type: 'password',
                    name: 'oldPassword',
                    value: '',
                    label: 'Старый пароль',
                    placeholder: 'Введите пароль',
                }),

                inputNewPassword: new Input({
                    type: 'password',
                    name: 'newPassword',
                    value: '',
                    label: 'Новый пароль',
                    placeholder: 'Введите пароль',
                }),

                inputNewPasswordRepeat: new Input({
                    type: 'password',
                    name: 'passwordRepeat',
                    value: '',
                    label: 'Повторить новый пароль',
                    placeholder: 'Введите пароль',
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

    render(): string {
        const {template} = this.props;
        return render(template);
    }
}
