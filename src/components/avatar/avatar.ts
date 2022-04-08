import {render} from 'pug';
import Block from '../../utils/block';
import template from './avatar.tmpl';

type Props = {
    srcImg: string;
    margin?: 'right' | 'left';
}

export defa
    render(): string {
        const {srcImg, margin = 'right'} = this.props;
        return render(template, {srcImg, margin});
    }
}
