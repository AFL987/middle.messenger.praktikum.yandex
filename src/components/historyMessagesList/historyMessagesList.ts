import {render} from 'pug';
import Block from '../../utils/block';
import template from './historyMessagesList.tmpl';

export default class HistoryMessagesList extends Block {
    constructor(props = {}) {
        super({
            ...props,
            status: '',
            messagesListCount: '',
        });
    }

    render(): string {
        const {messagesListCount} = this.props;
        return render(template, {messagesListCount});
    }
}
