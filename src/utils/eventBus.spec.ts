
import {expect, assert} from 'chai';
import {JSDOM} from 'jsdom';
import {render} from 'pug';
import Block from './block';

const template = `
img(src=srcImg)
`;

class Avatar extends Block {
    constructor(props: any = {}) {
        super({className: 'chat-item__avatar', ...props});
    }
    render(): string {
        const {srcImg, margin = 'right'} = this.props;
        return render(template, {srcImg, margin});
    }
}

describe('Block check', () => {
    const {window} = new JSDOM(
        `<html>
        <body>
            <div id="app"></div>
        </body>
        </html>`,
        {url: 'http://localhost'}
    );
    const windowContext: any = window;
    global.window = windowContext;
    global.document = window.document;

    it('Should create HTML element', () => {
        const avatar = new Avatar();
        expect(avatar.element.constructor.name).to.equal('HTMLDivElement');
    });

    it('Should change Props', () => {
        const avatar = new Avatar({
            srcImg: 'picture1',
        });

        avatar.setProps({srcImg: 'picture2'});
        assert.propertyVal(avatar.props, 'srcImg', 'picture2');
    });
});
