import {render} from 'pug';
import Block from '../../utils/block';
import template from './dialogCardList.tmpl';

export default class DialogCardList extends Block {
    constructor(props) {
        super({
            ...props,
            status: '',
            dialogCardListCount: '',
        });
    }

    render(): string {
        const {dialogCardListCount} = this.props;
        return render(template, {dialogCardListCount});
    }
}
