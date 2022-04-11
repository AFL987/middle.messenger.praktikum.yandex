import Router from './utils/router';
import PageSignIn from './pages/signIn';
import PageSignUp from './pages/signUp';
import PageHome from './pages/home/';
import PageProfile from './pages/profile';
import PagePasswordChange from './pages/password-change';
import Page404 from './pages/404-page';
import Page500 from './pages/500-page';
import './style.scss';

const router = new Router('#app');
router
    .use('/signup', PageSignUp)
    .use('/chats', PageHome)
    .use('/profile', PageProfile)
    .use('/password-change', PagePasswordChange)
    .use('/404', Page404)
    .use('/500', Page500)
    .use('/', PageSignIn)
    .start();

export default router;
