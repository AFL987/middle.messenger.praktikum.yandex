document.addEventListener('DOMContentLoaded', () => {

    // Открытие/закрытия профиля
    let profileOpen = document.querySelector('#profile_open');
    let backChatArrow = document.querySelector('#back_chat_arrow');
    let profileContainer = document.querySelector('#profile_container');

    profileOpen.addEventListener('click', () => {
        profileContainer.style.left = '0';
    })

    backChatArrow.addEventListener('click', () => {
        profileContainer.style.left = '100%';
    })


    //
    let chatFieldHeaderPointers = document.querySelector('#chat_field_header_pointers');
    chatFieldHeaderPointers.addEventListener('click', () => {
        alert();
    })
})
