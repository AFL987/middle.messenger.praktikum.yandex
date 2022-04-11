import {render} from 'pug';
import Block from '../../utils/block';
import IconLink from '../iconLink';
import template from './appChat.tmpl';
import add from '../../../static/img/plP.svg';
import deleteIcon from '../../../static/img/clear.svg';
import remove from '../../../static/img/minP.svg';
import ChatsAPI from '../../api/chatsApi';
import UserApi from '../../api/userApi';

export type PropsPage = {
    id: () => any;
    fetchChatsList: () => any;
    children?: {[key: string]: any}[],
};

export default class AppChat extends Block {
    value: string;
    _props: PropsPage;
    _id: () => any;
    _fetchChatsList: () => any;
    constructor(props: PropsPage) {
        const addUser = new IconLink({
            className: 'app-chat__add-user',
            srcIcon: add,
            events: {
                click: {
                    tagEvent: 'app-chat__add-user',
                    callback: () => {
                        console.log('add Person');
                        this.setProps({
                            open: !this.props.open,
                        });
                    },
                },
            },
        });
        const deleteUser = new IconLink({
            className: 'app-chat__delete-user',
            srcIcon: remove,
            events: {
                click: {
                    tagEvent: 'app-chat__delete-user',
                    callback: () => {
                        console.log('delete Person');
                        this.setProps({
                            openDelete: !this.props.openDelete,
                        });
                    },
                },
            },
        });
        const deleteChat = new IconLink({
            className: 'app-chat__delete-chat',
            srcIcon: deleteIcon,
            events: {
                click: {
                    tagEvent: 'app-chat__delete-chat',
                    callback: () => {
                        console.log(this.props)
                        const id = this._id();
                        new ChatsAPI().deleteChat(id)
                            .then(() => {
                                this._fetchChatsList()
                                console.log('dell')
                            });
                    },
                },
            },
        });
        const events = {
            input: {
                tagEvent: 'input',
                callback: (e: Event) => {
                    const element = e.target as HTMLInputElement;
                    this.value = element.value;
                }
            },
            click: {
                tagEvent: 'img',
                callback: () => {
                    if (this.value.length > 0) {
                        new UserApi().searchUser(this.value)
                            .then((data) => {
                                const result = JSON.parse(data.response);
                                const id = this._id();
                                if (this.props.openDelete) {
                                    new ChatsAPI().deleteUsersChat(result[0].id, id)
                                        .then(data => {
                                            const result = JSON.parse(data.response);
                                            console.log(result)
                                        });
                                } else {
                                    new ChatsAPI().addUsersChat(result[0].id, id)
                                        .then(data => {
                                            const result = JSON.parse(data.response);
                                            console.log(result)
                                        });
                                }
                            });
                    };
                },
            },
        };
        super({
            className: 'app-chat',
            open: false,
            openDelete: false,
            children: {addUser, deleteChat, deleteUser},
            value: '',
            events,
            ...props,
        });
        this._fetchChatsList = props.fetchChatsList;
        this._id = props.id;
    }
    render(): string {
        const {open, openDelete} = this.props;
        return render(template, {open, openDelete});
    }
}
