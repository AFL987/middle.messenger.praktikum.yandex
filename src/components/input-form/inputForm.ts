import {render} from 'pug';
import Block from '../../utils/block';
import template from './inputForm.tmpl';

export default class InputForm extends Block {
    constructor() {
        super({tagName: 'div', className: 'input-form'});
    }
    render(): string {
        return render(template);
    }
}