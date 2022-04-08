import {render} from 'pug';
import Block from '../../utils/block';
import template from './dialogCardList.tmpl';

type Props = {
    [key: string]: any;
}
export default class DialogCardList extends Block {
    constructor(props: Props) {
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
