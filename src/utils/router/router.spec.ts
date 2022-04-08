import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import Block from '../block';
import {Router} from './router';

describe('Checking the transitions at Route', () => {
    const {window} = new JSDOM(
        `<html>
        <body>
            <div id="app"></div>
        </body>
        </html>`,
        {url: 'http://localhost'}
    );

    global.window = window;
    global.document = window.document;

    const router = new Router('#app');
    router.use('/chats', Block);
    router.start();

    it('Should change the state of the history entity', () => {
        router.go('/chats');
        expect(router.history.length).to.equal(2);
    });

    it('Should change pathname', () => {
        router.go('/profile');
        expect(window.location.pathname).to.equal('/profile');
    });
});
