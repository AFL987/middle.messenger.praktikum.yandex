import {render} from 'pug';
import Block from '../../utils/block';
import template from './formInputIcon.tmpl';

export default class FormInputIcon extends Block {
    constructor(props) {
        super({tagName: 'form', error: false, className: 'form-input-icon', ...props});
    }
    render(): string {
        const {placeholder, error, srcIcon, value = ''} = this.props;
        return render(template, {placeholder, srcIcon, error, value});
    }
}
