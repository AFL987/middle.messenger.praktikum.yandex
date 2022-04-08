import {render} from 'pug';
import Block from '../../utils/block';
import Avatar from '../avatar';
import template from './dialogCard.tmpl';

type Props = {
    id: number,
    srcImg: string;
    active: boolean;
    name: string;
    message: string;
    time: string;
    status: string;
    notifications: string;
}

export default class DialogCard extends Block {
    constructor(props: Props) {
        const {srcImg, active} = props;
        const avatar = new Avatar({srcImg});
        super({tagName: 'li', children: {avatar}, ...props});
    }
    render(): string {
        const {name, message, active, time, status, notifications} = this.props;
        const activeClass = active ? 'chat-item_is-active' : '';
        return render(template, {
            name,
            activeClass,
            active,
            message,
            time,
            status,
            notifications,
        });
    }
}
