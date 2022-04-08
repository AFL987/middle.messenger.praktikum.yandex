import {render} from 'pug';
import Block from '../../utils/block';
import Avatar from '../avatar';
import template from './historyMessages.tmpl';

type Props = {
	srcImg: string;
	margin?: 'right' | 'left',
	name: string | number;
	message: string | number;
	time: string | number;
	status: string | number;
	owner: string;
}

export default class HistoryMessages extends Block {
    constructor(props: Props) {
        const {srcImg, margin} = props;
        const avatar = new Avatar({srcImg, margin});
        super({children: {avatar}, ...props});
    }
    render(): string {
        const {name, message, time, status, owner} = this.props;
        const messageStyle = owner === 'in' ? 'message-in' : 'message-out';
        return render(template, {
            name,
            message,
            time,
            status,
            messageStyle,
        });
    }
}
