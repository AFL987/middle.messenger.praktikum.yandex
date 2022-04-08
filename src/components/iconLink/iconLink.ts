import {render} from 'pug';
import router from '../../index';
import Block from '../../utils/block';
import template from './iconLink.tmpl';
import {Events} from '../../utils/types';

type Props = {
    className: string,
    srcIcon: string,
    link?: string,
    events?: Events,
}

export default class IconLink extends Block {
    constructor(props: Props) {
        const _events = {
            click: {
                tagEvent: props.className || 'link',
                callback: () => {
                    const {link = ''} = props;
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
