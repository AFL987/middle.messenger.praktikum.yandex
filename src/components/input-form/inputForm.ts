import {render} from 'pug';
import Block from '../../utils/block';
import template from './inputForm.tmpl';

export default class InputForm extends Block {
    constructor(props = {}) {
        super({tagName: 'div', className: 'input-form', ...props});
    }
    render(): string {
        return render(template);
    }
}
