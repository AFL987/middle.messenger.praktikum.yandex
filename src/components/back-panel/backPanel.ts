import {render} from 'pug';
import Block from '../../utils/block';
import template from './backPanel.tmpl';
import IconLink from "../iconLink";
import arrowBlue from '../../../static/img/arrou_blue.svg';

type Props = {
	back: string;
}

export default class BackPanel extends Block {
    constructor(props: Props) {

			const profileIcon = new IconLink({
				className: 'profile',
				srcIcon: arrowBlue,
				link: props.back,
			});


			super({children: {profileIcon}});
    }
    render(): string {
				const {back} = this.props;
        return render(template, {back});
    }
}