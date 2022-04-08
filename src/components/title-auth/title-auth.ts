import {render} from 'pug';
import Block from '../../utils/block';
import template from './title-auth.tmpl';
import router from '../../index';

type Props = {
    title: string;
}

export default class TitleAuth extends Block {
    constructor(props: Props) {
        const events = {
            click: {
                tagEvent: '.title-auth__sub',
                callback: (e: Event) => {
                    router.go(props.link);
                },
            },
        };
        super({...props, events});
    }
    render(): string {
        const {title} = this.props;
        return render(template, {
            title
        });
    }
}
