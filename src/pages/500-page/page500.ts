import {render} from 'pug';
import Block from '../../utils/block';
import template from './page500.tmpl';
import NavigationPanel from "../../components/navigation-panel";
import Link from "../../components/link";
export default class Page500 extends Block {
	constructor() {
		const _link = new Link({
			title: 'Назад к чатам',
			link: '/chats',
		});
		document.title = 'page500';
		const _template = template;
		super({
			template: _template,
			children: {
				navigationPanel: new NavigationPanel(),
				link: _link
			}
		});
	}

	render(): string {
		const {template} = this.props;
		return render(template);
	}
}

