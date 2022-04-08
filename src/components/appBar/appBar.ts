import {render} from 'pug';
import Block from '../../utils/block';
import IconLink from '../iconLink';
import template from './appBar.tmpl';
import AuthAPI from '../../api/authApi';
import router from '../../index';

export default class AppBar extends Block {
    constructor() {


        const profileIcon = new IconLink({
            className: 'profile',
            srcIcon: '',
            link: '/profile',
        });

        const logout = new IconLink({
            className: 'logout',
            srcIcon: '',
            events: {
                click: {
                    tagEvent: 'logout',
                    callback: () => {
                        router.go('/');
                        new AuthAPI().logout();
                    },
                },
            },
        });

        super({children: {profileIcon, logout}});
    }
    render(): string {
        return render(template);
    }
}
