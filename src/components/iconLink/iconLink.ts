import {render} from 'pug';
import router from '../../index';
import Block from '../../utils/block';
import template from './iconLink.tmpl';

export default class IconLink extends Block {
    constructor(props) {
        const _events = {
            click: {
                tagEvent: props.className || 'link',
                callback: () => {
                    const {link} = props;
                    router.go(link);
                },
            },
        };
        const events = props.events !== undefined ? props.events : _events;
        super({...props, events});
    }
    render(): string {
        const {srcIcon} = this.props;
        return render(template, {srcIcon});
    }
}
