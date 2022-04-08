import Block from '../../utils/block';
import {render} from 'pug';
import Button from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';
import template from './passwordChange.tmpl';
import Profile from '../../components/profile';
import Form from '../../components/form';
import images from '../../../static/img/l.jpg';
import BackPanel from "../../components/back-panel";
import NavigationPanel from "../../components/navigation-panel";
import AuthAPI from "../../api/authApi";
import {snakeToCamel} from "../../utils/snakeCamel";

const formTempl = `
form
    #inputOldPassword
    #inputNewPassword
    #inputNewPasswordRepeat
    .group-elements
        #button
`;

export default class PagePasswordChange extends Block {
    constructor() {
        document.title = 'pagePasswordChange';
        const _profile = new Profile({
            name: '',
            srcImg: images,
        });

				const backPanel = new BackPanel({
					back: '/profile',
				});

        const _form = new Form({
            page: 'pagePasswordChange',
						getUserInfo: () => this.getUserInfo(),
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

                link: new Link({
                    title: 'Назад',
                    link: '/profile',
                }),
            },
        });
        super({
            children: {
                profile: _profile,
								backPanel: backPanel,
								navigationPanel: new NavigationPanel(),
                form: _form,
            },
        });
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
