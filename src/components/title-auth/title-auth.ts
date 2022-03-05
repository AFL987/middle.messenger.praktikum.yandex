import {render} from 'pug';
import Block from '../../utils/block';
import template from './title-auth.tmpl';

type Props = {
    title: string;
}

export default class TitleAuth extends Block {
    constructor(props: Props) {
        super(props);
    }
    render(): string {
        const {title} = this.props;
        return render(template, {
            title
        });
    }
}