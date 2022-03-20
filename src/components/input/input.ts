import {render} from 'pug';
import Block from '../../utils/block';
import template from './input.tmpl';
import {validation} from '../../utils/validation';
import Error from '../error';

type Props = {
    type: string;
    name: string;
    value: string;
    label: string;
    placeholder?: string;
    tagName?: string;
    className?: string;
    errorBlock?: Block;
}

export default class Input extends Block {
    props: Props;
    constructor(props: Props) {
        const events = {
            blur: {
                tagEvent: 'input',
                callback: (e: Event) => {
                    this.checkInput(e, this.props.type);
                },
            },
            focus: {
                tagEvent: 'input',
                callback: () => {
                    this.disableErrors();
                },
            },
        };
        const errorBlock = new Error({text: '', className: 'input_error'});
        super({
            ...props,
            events,
            errorBlock,
            children: {error: errorBlock},
            tagName: 'section',
            className: 'input',
        });
    }

    checkInput(e: Event, type: string): void {
        const result = validation((e.target as HTMLInputElement).value, type);
        if (this.props.errorBlock) {
            this.props.errorBlock.setProps({text: result?.messageError});
        }
    }

    disableErrors(): void {
        if (this.props.errorBlock) {
            this.props.errorBlock.setProps({text: ''});
        }
    }

    render(): string {
        const {type, name, value, label, placeholder} = this.props;
        return render(template, {
            type,
            name,
            value,
            label,
            placeholder,
        });
    }
}
