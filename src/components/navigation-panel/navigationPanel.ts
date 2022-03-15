import {render} from 'pug';
import Block from '../../utils/block';
import template from './navigationPanel.tmpl';

export default class NavigationPanel extends Block {
    constructor() {
			super();
    }
    render(): string {
        return render(template, {});
    }
}