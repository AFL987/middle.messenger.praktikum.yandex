import template from './home.tmpl';
import SearchForm from '../../components/search-form';
import DialogCard from '../../components/dialog-card';
import HistoryMessages from '../../components/history-messages';
import InputForm from '../../components/input-form';
import PageHome from './home';
import images from '../../../static/img/*.png';
import Form from '../../components/form';
import NavigationPanel from "../../components/navigation-panel";

const formTmpl = `
#message
`;

new PageHome({
    title: 'home',
    template: template,
    children: {

				navigationPanel: new NavigationPanel().getContent(),
        searchForm: new SearchForm().getContent(),

				// ЧАТЫ
        dialogCard1: new DialogCard({
            srcImg: images.L2,
            name: 'Андрей',
            message: 'Друзья, у меня для вас особенный выпуск новостей!...',
            time: '11:44',
            notifications: '',
            active: true,
        }).getContent(),

        dialogCard2: new DialogCard({
            srcImg: images.L3,
            name: 'Владими',
            message: 'И Human Interface Guidelines и Material Design рекомендуют...',
            time: '25:77',
            notifications: '',
            active: false,
        }).getContent(),

        dialogCard3: new DialogCard({
            srcImg: images.L2,
            name: 'Еще какая-то хрень',
            message: 'Миллионы россиян ежедневно проводят десятки часов свое...',
            time: 'пт',
            notifications: '',
            active: false,
        }).getContent(),

        dialogCard4: new DialogCard({
            srcImg: images.L3,
            name: 'и курсы на мидла...',
            message: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
            time: 'ср',
            notifications: '',
            active: false,
        }).getContent(),


				// СООБЩЕНИЯ

        historyMessages1: new HistoryMessages({
            message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
            time: '16:55',
            owner: 'in',
        }).getContent(),

        historyMessages2: new HistoryMessages({
            message: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
            time: '16:55',
            owner: 'in',
        }).getContent(),

        historyMessages3: new HistoryMessages({
            message: 'Вот они молодцы мы только приехали, тоже сейчас будем кушать',
            time: '16:55',
            owner: 'out',
        }).getContent(),

			historyMessages4: new HistoryMessages({
				message: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
				time: '16:55',
				owner: 'in',
			}).getContent(),

        form: new Form({
            template: formTmpl,
            className: 'message-form',
            children: {
                message: new InputForm().getContent(),
            },
        }).getContent(),
    },
});
