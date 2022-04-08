import {render} from 'pug';
import Block from '../../utils/block';
import template from './avatarProfile.tmpl';

type Props = {
    srcImg: string | unknown;
}

export default class AvatarProfile extends Block {
    constructor(props: Props) {
        super(props);
    }
    render(): string {
        const {srcImg} = this.props;
        return render(template, {srcImg});
    }
}
