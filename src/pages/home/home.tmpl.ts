import foo from '../../../static/svg/*.svg';
export default `
.chat
    .sidebar
        .sidebar__content
            .app-bar             
                .app-bar__log-out
                    a(href="../profile/index.html") Профиль &gt;
            #searchForm
            nav
            ul.chat-list
                #dialogCard1
                #dialogCard2
                #dialogCard3
                #dialogCard4             
    main.content
        .msg
            #historyMessages1
            #historyMessages2
            #historyMessages3    
            #historyMessages4       
        footer.footer
            #form
`;
