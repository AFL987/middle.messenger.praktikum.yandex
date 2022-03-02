document.addEventListener('DOMContentLoaded', () => {

    let chat: object = document.querySelectorAll('.chat');
    let chatFieldHeader: object = document.querySelector('#chat_field_header');
    let chatFieldHeaderTitle: object = document.querySelector('#chat_field_header_title');
    let chatFieldModal: object = document.querySelector('#chat_field_modal');

    chat.forEach((item:any) => {
        item.addEventListener('click', () => {
            chatFieldHeader.style.opacity = "1";
            chatFieldHeader.style.display = "flex";
            chatFieldHeaderTitle.textContent = item.dataset.title;
            chatFieldModal.style.right = '-500px';
        })
    })

})