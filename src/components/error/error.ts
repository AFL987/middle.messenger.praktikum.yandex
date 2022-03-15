import {render} from 'pug';
import Block from '../../utils/block';
import template from './error.tmpl';

type Props = {
    text: string;
    className?: string;
}

export default class Error extends Block {
    constructor(props: Props) {
        super({...props});
    }
    render(): string {
        const {text} = this.props;
        return render(template, {text});
    }
}