export default `
section(class="msg-item "+messageStyle)
    #avatar
    .msg-item__name= name
    .msg-item__message= message
    .msg-item__time= time
    .msg-item__menu Выпадающее меню сообщения
`;
