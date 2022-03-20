export default `
div(class='chat-item '+activeClass)
    #avatar
    .chat-item__name= name
    .chat-item__message= message
    .chat-item__time= time
    .chat-item__status
        div(class="status-message is-"+status) 
    .chat-item__notifications
`;
