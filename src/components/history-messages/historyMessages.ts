import {render} from 'pug';
import Block from '../../utils/block';
import Avatar from '../avatar';
import template from './historyMessages.tmpl';

type Props = {

    margin?: 'right' | 'left',
    message: string;
    time: string;
    owner: string;
}

export default class HistoryMessages extends Block {
    constructor(props: Props) {
        const {margin} = props;
        const avatar = new Avatar({margin}).getContent();
        super({children: {avatar}, ...props});
    }
    render(): string {
        const {message, time, owner} = this.props;
        const messageStyle = owner === 'in' ? 'message-in' : 'message-out';
        return render(template, {
            message,
            time,
            messageStyle,
        });
    }
}