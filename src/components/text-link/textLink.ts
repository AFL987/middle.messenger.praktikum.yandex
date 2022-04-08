import {render} from 'pug';
import Block from '../../utils/block';
import Link from '../link';
import template from './textLink.tmpl';

type Props = {
    title: string;
    text: string;
    link: string;
}

export default class TextLink extends Block {
    constructor(props: Props) {
        const {title, link} = props;
        const linkEl = new Link({title, link, className: 'link'});
        super({...props, children: {linkEl}});
    }
    render(): string {
        const {text} = this.props;
        return render(template, {text});
    }
}
