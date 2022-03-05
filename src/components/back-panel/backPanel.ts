import {render} from 'pug';
import Block from '../../utils/block';
import template from './backPanel.tmpl';

type Props = {
	back: string;
}

export default class BackPanel extends Block {
    constructor(props: Props) {
			super({...props});
    }
    render(): string {
				const {back} = this.props;
        return render(template, {back});
    }
}