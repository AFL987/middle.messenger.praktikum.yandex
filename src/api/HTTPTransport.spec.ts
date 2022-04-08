import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import HTTPTransport from './HTTPTransport';

chai.use(sinonChai);

describe('Testing HTTPTransport', () => {
    let request: HTTPTransport;
    beforeEach(() => {
        request = new HTTPTransport('http://localhost');
    });

    it('Metod GET', () => {
        const requestSpy = sinon.spy(request, 'request');
        request.get('/test');

        expect(requestSpy).to.have.been.calledWith('http://localhost/test', {method: 'GET'});
    });

    it('Metod PUT', () => {
        const requestSpy = sinon.spy(request, 'request');
        request.put('/test');

        expect(requestSpy).to.have.been.calledWith('http://localhost/test', {
            method: 'PUT',
        });
    });

    it('Metod POST', () => {
        const requestSpy = sinon.spy(request, 'request');
        request.post('/test');

        expect(requestSpy).to.have.been.calledWith('http://localhost/test', {method: 'POST'});
    });

    it('Metod DELETE', () => {
        const requestSpy = sinon.spy(request, 'request');
        request.delete('/test', {});

        expect(requestSpy).to.have.been.calledWith('http://localhost/test', {method: 'DELETE'});
    });
});
