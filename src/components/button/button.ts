import {render} from 'pug';
import Block from '../../utils/block';
import template from './button.tmpl';

type Props = {
    title: string;
    type?: string;
}

export default class Button extends Block {
    constructor(props: Props) {
        super({...props});
    }
    render(): string {
        const {title, type} = this.props;
        return render(template, {
            title,
            type,
        });
    }
}