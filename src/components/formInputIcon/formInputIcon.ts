import {render} from 'pug';
import Block from '../../utils/block';
import template from './formInputIcon.tmpl';
import {Events} from '../../utils/types';

type Props = {
    placeholder: string,
    name: string,
    srcIcon: string,
    value: string,
    events: Events,
}

export default class FormInputIcon extends Block {
    constructor(props: Props) {
        super({tagName: 'form', error: false, className: 'form-input-icon', ...props});
    }
    render(): string {
        const {placeholder, error, srcIcon, value = ''} = this.props;
        return render(template, {placeholder, srcIcon, error, value});
    }
}
