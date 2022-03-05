import {render} from 'pug';
import Block from '../../utils/block';
import template from './link.tmpl';

type Props = {
    title: string;
    href: string;
    className?: string;
}

export default class Link extends Block {
    constructor(props: Props) {
        const {href, className, title} = props;
        super({tagName: 'a', attribute: {href}, className: className || 'link', title});
    }
    render(): string {
        const {title, href, className = ''} = this.props;
        return render(template, {title, href, className});
    }
}
