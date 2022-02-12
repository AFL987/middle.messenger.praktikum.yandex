document.addEventListener('DOMContentLoaded', () => {

    let chat = document.querySelectorAll('.chat');
    let chatFieldHeader = document.querySelector('#chat_field_header');
    let chatFieldHeaderTitle = document.querySelector('#chat_field_header_title');
    let chatFieldModal = document.querySelector('#chat_field_modal');

    chat.forEach(item => {
        item.addEventListener('click', () => {
            chatFieldHeader.style.opacity = "1";
            chatFieldHeader.style.display = "flex";
            chatFieldHeaderTitle.textContent = item.dataset.title;
            chatFieldModal.style.right = '-500px';
        })
    })

})