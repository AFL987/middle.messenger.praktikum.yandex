import {render} from 'pug';
import Block from '../../utils/block';
import template from './navigationPanel.tmpl';
import Link from "../link";

export default class NavigationPanel extends Block {
    constructor() {
			const _link1 = new Link({
				title: 'Главная',
				link: '/',
			});
			const _link2 = new Link({
				title: 'регистрация',
				link: '/signup',
			});
			const _link3 = new Link({
				title: 'чаты',
				link: '/chats',
			});
			const _link4 = new Link({
				title: 'профиль',
				link: '/profile',
			});
			const _link5 = new Link({
				title: 'смена пароля',
				link: '/password-change',
			});
			const _link6 = new Link({
				title: '404',
				link: '/404',
			});
			const _link7 = new Link({
				title: '500',
				link: '/500',
			});

			super({
				children: {
					link1: _link1,
					link2: _link2,
					link3: _link3,
					link4: _link4,
					link5: _link5,
					link6: _link6,
					link7: _link7
				},
			});
    }
    render(): string {
        return render(template, {});
    }
}