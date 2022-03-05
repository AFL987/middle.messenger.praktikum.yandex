export default `
section(class="msg-item "+messageStyle)   
    .msg-item__message= message
    .msg-item__time= time
    .msg-item__status
        div(class="status-message is-"+status) 
    .msg-item__menu Выпадающее меню сообщения
`;
