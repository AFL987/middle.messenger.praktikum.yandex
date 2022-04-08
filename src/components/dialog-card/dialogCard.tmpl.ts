export default `
div(class='chat-item '+activeClass)
    #avatar
    .chat-item__name= name
    .chat-item__message= message
    .chat-item__notifications
`;
