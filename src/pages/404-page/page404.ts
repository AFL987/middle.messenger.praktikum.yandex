import {render} from 'pug';
import Block from '../../utils/block';
import template from './page404.tmpl';
import NavigationPanel from "../../components/navigation-panel";
export default class Page404 extends Block {
    constructor() {
        document.title = 'page404';
        const _template = template;

        super({
					template: _template,
					children: {
						navigationPanel: new NavigationPanel(),
					}
				});
    }

    render(): string {
        const {template} = this.props;
        return render(template);
    }
}
