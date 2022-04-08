export default `
#button
ul.chat-list-message
    -   for (var i = 0; i < messagesListCount; i++)
        div(id="messageCard"+i) !{i}
`;
