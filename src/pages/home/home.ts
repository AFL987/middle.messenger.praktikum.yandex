import Block from '../../utils/block';
import {render} from 'pug';
import DialogCard from '../../components/dialog-card';
import HistoryMessages from '../../components/history-messages';
import FormInputIcon from '../../components/formInputIcon';
import AppBar from '../../components/appBar/appBar';
import Profile from '../../components/profile';
import images from '../../../static/img/*.png';
import AuthAPI from '../../api/authApi';
import ChatsApi from '../../api/chatsApi';
import template from './home.tmpl';
import InputForm from '../../components/input-form';
import Form from '../../components/form';
import DialogCardList from '../../components/dialogCardList';
import WebSocketMessage from '../../api/webSocket';
import HistoryMessagesList from '../../components/historyMessagesList';
import router from '../../index';
import NavigationPanel from "../../components/navigation-panel";
import Link from "../../components/link";
import IconLink from "../../components/iconLink";
import logoutIcon from '../../../static/img/exit.svg';
import plusIcon from '../../../static/img/plus.svg';

const formTmpl = `
#message
`;
export default class PageHome extends Block {
    _cardList: [];
    _activeIdDialog: number;
    _userName: string;
    _userId: string;
    _userToken: string;
    socketMessage: [];
    _usersChat: Record<string, unknown>;;

    constructor() {
        const _template = template;
        document.title = 'home';

        const _appBar = new AppBar();

				const _linkProf = new Link({
					title: 'Профиль >',
					link: '/profile',
				});

			const logout = new IconLink({
				className: 'logout',
				srcIcon: logoutIcon,
				events: {
					click: {
						tagEvent: 'logout',
						callback: () => {
							router.go('/');
							new AuthAPI().logout();
						},
					},
				},
			});

        const _avatarProfile = new Profile({
            name: '',
            srcImg: images.L,
        });

        const _searchForm = new FormInputIcon({
            placeholder: 'Поиск',
            name: 'search',
            srcIcon: '',
            value: '',
            events: {
                click: {
                    tagEvent: 'button',
                    callback: (e) => {
                        e.preventDefault();
                    }
                },
                input: {
                    tagEvent: 'input',
                    callback: (e) => {
                        e.preventDefault();
                    }
                }
            }
        });


        const _dialogCardList = new DialogCardList({
            fetchChatsList: () => this.fetchChatsList(),
            events: {
                click: {
                    tagEvent: 'li',
                    callback: (e: Event) => {
                        const idChat = +e.currentTarget?.dataset.index;
                        this._activeIdDialog = idChat;
                        this.socketMessage = [];
                        new ChatsApi().getChatUsers(idChat)
                            .then((data) => {
                                const result = JSON.parse(data.response);
                                result.forEach((user) => {
                                    this._usersChat[user.id] = {...user}
                                })
                            }).then(() => {
                                return this.connectToChat(idChat);
                            }).then(({token}) => {
																console.log(token)
                                return this.connectToServerSocket(this._userId, idChat, token);
                            })
                        for (let card in this._cardList) {
                            if (this._cardList[card].props.attribute['data-index'] === idChat) {
                                this._cardList[card].setProps({
                                    active: true,
                                })
                            } else {
                                this._cardList[card].setProps({
                                    active: false,
                                })
                            }
                        }
                    },
                },
            }
        });

        const _historyMessagesList = new HistoryMessagesList();

        const _form = new Form({
            template: formTmpl,
            className: 'message-form',
            children: {
                message: new InputForm({
                    message: ''
                    events: {
                        click: {
                            tagEvent: '.input-form__send-message',
                            callback: () => {
                                if (this.message.length > 0) {
                                    this.sendMessage(this.message)
                                }
                            }
                        },
                        input: {
                            tagEvent: 'input',
                            callback: (e: Event) => {
                                this.message = e.target.value
                            }
                        }
                    }
                }),
            },
        });

			const _addChat = new FormInputIcon({
				placeholder: 'Введите название чата',
				name: 'addChat',
				value: '',
				srcIcon: plusIcon,
				events: {
					input: {
						tagEvent: 'input',
						callback: (e: Event) => {
							e.preventDefault();
							const element = e.target as HTMLInputElement;
							this.value = element.value;
						},
					},
					click: {
						tagEvent: 'button',
						callback: (e: Event) => {
							e.preventDefault();
							if (this.value.length > 3) {
								new ChatsApi().createChat(this.value)
									.then((data) => {
										const result = JSON.parse(data.response);
										console.log(result);
										this.value = '';
										this.fetchChatsList();
									}).catch((err) => {
									console.error(err);
								});
							} else {
								this.setProps({
									error: true,
								});
							}
						},
					},
				},
			});

        super({
            template: _template,
            _message: [],
            children: {
								navigationPanel: new NavigationPanel(),
                appBar: _appBar,
                avatarProfile: _avatarProfile,
                searchForm: _searchForm,
								logout: logout,
								addChat: _addChat,
								linkProf: _linkProf,
                dialogCardList: _dialogCardList,
                historyMessagesList: _historyMessagesList,
                form: _form,
            },
        });

        this._cardList = '';
        this._activeIdDialog = '';
        this._userName = 'test';
        this._userId = '';
        this._userToken = '';
        this.socketMessage = [];
        this._usersChat = {};
    }

    componentDidMount() {
        new AuthAPI().getUserInfo()
            .then((data) => {
                const userInfo = JSON.parse(data.response);
                const {login, avatar, id} = userInfo;
                this._userId = id;
                this.props.children.avatarProfile.setProps({
                    name: login,
                    srcImg: images.L,
                });
            })
            .then(() => {
                this.fetchChatsList();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    fetchChatsList() {
        new ChatsApi().getChats()
            .then((data) => {
                const result = JSON.parse(data.response);
                let childrenCard = {};
                result.forEach((el, id) => {
                    const {last_message, avatar, title} = el;
                    childrenCard[`dialogCard${id}`] =
                        new DialogCard({
                            attribute: {'data-index': el.id},
                            srcImg: avatar || images.L2,
                            name: (last_message && (last_message.user.display_name || `${last_message.user.first_name} ${last_message.user.second_name}`)) || title,
                            message: (last_message && last_message.content) || 'Сообщений нет',
                            time: '16:53',
                            status: 'received',
                            notifications: '',
                            active: false,
                        });
                })
                this._cardList = childrenCard;
                const {dialogCardList} = this.props.children;
                dialogCardList.setProps({
                    children: {...dialogCardList.props.children, ...childrenCard},
                    dialogCardListCount: result.length,
                });
            }).catch((err) => {
                console.error(err);
            });
    }

    loadingMessageList() {
        let messageList = {};
        this.socketMessage.forEach((message, index) => {
            const {chat_id, content, id, is_read, time, user_id} = message;
            const {avatar, second_name, first_name, display_name} = this._usersChat[user_id];
            messageList[`messageCard${index}`] =
                new HistoryMessages({
                    srcImg: avatar || images.L2,
                    name: display_name || `${first_name} ${second_name}`,
                    message: content,
                    time: time,
                    status: is_read,
                    owner: 'in',
                });
        })
        const {historyMessagesList} = this.props.children;

        historyMessagesList.setProps({
            children: {...historyMessagesList.props.children, ...messageList},
            messagesListCount: this.socketMessage.length,
        });
    }

    fetchChatMessageList(data: []) {
        this.socketMessage = Array.isArray(data) ? data : [...this.socketMessage, data];
        let messageList = {};
        this.socketMessage.forEach((message, index) => {
            const {chat_id, content, id, is_read, time, user_id} = message;
            const {avatar, second_name, first_name, display_name} = this._usersChat[user_id];
            messageList[`messageCard${index}`] =
                new HistoryMessages({
                    srcImg: images.L2,
                    name: display_name || `${first_name} ${second_name}`,
                    message: content,
										time: new Date(time).toLocaleTimeString(),
                    status: is_read,
                    owner: 'in',
                });
        })
        const {historyMessagesList} = this.props.children;

        historyMessagesList.setProps({
            children: {...historyMessagesList.props.children, ...messageList},
            messagesListCount: this.socketMessage.length,
        });
    }

    connectToChat(chatId: number) {
        return new ChatsApi().getChatUsersToken(chatId)
            .then((data) => {
                return JSON.parse(data.response);
            }).catch((err) => {
                console.error(err);
            });
    }

    fetchUsersChat(chatId: number) {
        new ChatsApi().getChatUsers(chatId)
            .then((data) => {
                const result = JSON.parse(data.response);
                result.forEach((user) => {
                    this._usersChat[user.id] = {...user}
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    connectToServerSocket(userId: string, chatId: number, token) {
        if (userId && chatId && token) {
					new WebSocketMessage(this.fetchChatMessageList.bind(this), userId, chatId, token)
        }
    }
    sendMessage(message: string) {
				new WebSocketMessage(this.fetchChatMessageList.bind(this)).send(message);
    }
    render(): string {
        new AuthAPI().getUserInfo()
            .then((data) => {
                const userInfo = JSON.parse(data.response);
                if (userInfo.reason) {
                    router.go('/');
                }
                this.props.children.avatarProfile.setProps({
                    name: userInfo.login,
                    srcImg: images.L,
                });
            }).catch((err) => {
								router.go('/');
                console.error(err);
            });
        const {template} = this.props;
        return render(template);
    }
}
