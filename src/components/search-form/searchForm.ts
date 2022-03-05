import {render} from 'pug';
import Block from '../../utils/block';
import template from './searchForm.tmpl';

export default class SearchForm extends Block {
    constructor() {
        super({tagName: 'form', className: 'search-form'});
    }
    render(): string {
        return render(template);
    }
}