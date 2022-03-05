import Block from '../../utils/block';
import {render} from 'pug';
import {PropsPage} from '../../utils/types';

export default class PagePasswordChange extends Block {
    constructor(props: PropsPage) {
        super({...props});
        document.title = props.title;
    }

    componentDidMount(): HTMLElement {
        const element = document.getElementById('app');
        element?.appendChild(this.getContent());
        return element as HTMLElement;
    }

    render(): string {
        const {template} = this.props;
        return render(template);
    }
}
