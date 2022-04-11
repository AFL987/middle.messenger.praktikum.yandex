import {render} from 'pug';
import router from '../../index';
import Block from '../../utils/block';
import template from './link.tmpl';

type Props = {
	title: string;
	link: string;
	className?: string;
}

export default class Link extends Block {
	constructor(props: Props) {
		const {link, className, title} = props;
		const events = {
			click: {
				tagEvent: 'link',
				callback: () => {
					router.go(link);
				},
			},
		};
		super({className: className || 'link', title, events});
	}
	render(): string {
		const {title, link, className = ''} = this.props;
		return render(template, {title, link, className});
	}
}
