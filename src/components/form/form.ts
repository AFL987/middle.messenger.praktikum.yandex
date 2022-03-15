import {render} from 'pug';
import Block from '../../utils/block';
import {verificationSubmitValues} from '../../utils/verificationSubmitValues';

type Events = {
    [key: string]: {tagEvent: string, callback: ((...args) => unknown)}
}

type Props = {
    children?: {[key: string]: HTMLElement},
    className?: string;
    events?: Events;
    page?: string;
    template?: string;
}

export default class Form extends Block {
    props: Props;
    constructor(props: Props) {
        const events: Events = {
            submit: {
                tagEvent: 'form',
                callback: (e) => {
                    e.preventDefault();
                    this.validValues(e.target, this.props.page);
                },
            },
        };
        super({
            ...props,
            className: props.className || 'form',
            events,
        });
    }
    validValues(e: Event, pageName: string | unknown): void {
        const result = verificationSubmitValues(e, pageName);
        console.log('errors', result);
    }
    render(): string {
        const {template} = this.props;
        return render(template);
    }
}