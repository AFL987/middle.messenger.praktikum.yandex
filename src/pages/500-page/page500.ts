import {render} from 'pug';
import Block from '../../utils/block';

type Props = {
    title: string;
    template: string;
}

export default class Page500 extends Block {
    props: Props;
    constructor(props: Props) {
        super({...props});
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
