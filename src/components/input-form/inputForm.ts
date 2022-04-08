import {render} from 'pug';
import Block from '../../utils/block';
import template from './inputForm.tmpl';

type Props = {
    sendMessage: (arg: string) => any;
    setValueInput: (arg: string) => any;
    messageInChat: () => string;
}
export default class InputForm extends Block {
    _sendMessage: (arg: string) => any;
    _setValueInput: (arg: string) => any;
    value: () => string;;

    constructor(props: Props) {
        let _value = '';
        const events = {
            click: {
                tagEvent: '.input-form__send-message',
                callback: () => {
                    _value = this.value();
                    if (_value.length > 0) {
                        this._sendMessage(_value);
                        this.setProps({
                            _value: '',
                        })
                    }
                },
            },
            input: {
                tagEvent: 'input',
                callback: (e: Event) => {
                    const element = e.target as HTMLInputElement;
                    this._setValueInput(element.value)
                },
            },
        }
        super({tagName: 'div', className: 'input-form', events, _value, ...props});

        this._sendMessage = props.sendMessage;
        this._setValueInput = props.setValueInput;
        this.value = props.messageInChat;
    }
    render(): string {
        const {_value} = this.props;
        return render(template, {_value});
    }
}
