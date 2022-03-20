import svg from '../../../static/img/*.svg';
export default `
.input-form__media-attach
    img(src="${svg.clip}")
.input-form__message
    input(type="text" placeholder="Сообщение")
.input-form__send-message
    img(src="${svg.arrou_blue}")
`;