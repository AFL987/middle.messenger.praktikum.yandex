import {render} from 'pug';
import Block from '../../utils/block';
import AvatarProfile from '../avatarProfile';
import template from './profile.tmpl';
import AuthAPI from '../../api/authApi';

type Props = {
    name: string;
    srcImg: string;
    avatarProfile?: string;
    className?: string;
}

export default class Profile extends Block {
    nameUser: string;
    constructor(props: Props) {
        super({...props});
        this.nameUser = '';
    }
    componentDidMount() {
        new AuthAPI().getUserInfo()
            .then((data) => {
                const userInfo = JSON.parse(data.response);
                this.setProps({
                    name: userInfo.login,
                })
                this.nameUser = this.props.name;
            })
    }

    render(): string {
        const {name, srcImg} = this.props;
        return render(template, {
            name,
            avatarProfile: new AvatarProfile({srcImg}).render(),
        });
    }
}
