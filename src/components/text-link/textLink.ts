import {render} from 'pug';
import Block from '../../utils/block';
import Link from '../link';
import template from './textLink.tmpl';

type Props = {
    title: string;
    text: string;
    href: string;
}

export default class TextLink extends Block {
    constructor(props: Props) {
        const {title, href} = props;
        const link = new Link({title, href, className: 'link'}).getContent();
        super({...props, children: {link}});
    }
    render(): string {
        const {text} = this.props;
        return render(template, {text});
    }
}