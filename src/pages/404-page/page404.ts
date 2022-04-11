import {render} from 'pug';
import Block from '../../utils/block';
import template from './page404.tmpl';
import NavigationPanel from "../../components/navigation-panel";
import Link from "../../components/link";
export default class Page404 extends Block {
	constructor() {
		const _link = new Link({
			title: 'Назад к чатам',
			link: '/chats',
		});

		document.title = 'page404';
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
