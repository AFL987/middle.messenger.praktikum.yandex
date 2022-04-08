export default `
#button
ul.chat-list
    -   for (var i = 0; i < dialogCardListCount; i++)
        div(id="dialogCard"+i) !{i}
`;
