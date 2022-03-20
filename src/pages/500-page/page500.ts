import {render} from 'pug';
import Block from '../../utils/block';
import template from './page500.tmpl';
import NavigationPanel from "../../components/navigation-panel";
export default class Page500 extends Block {
    constructor() {
        document.title = 'page500';
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
