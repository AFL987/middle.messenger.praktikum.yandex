document.addEventListener('DOMContentLoaded', function () {
    var chat = document.querySelectorAll('.chat');
    var chatFieldHeader = document.querySelector('#chat_field_header');
    var chatFieldHeaderTitle = document.querySelector('#chat_field_header_title');
    var chatFieldModal = document.querySelector('#chat_field_modal');
    chat.forEach(function (item) {
        item.addEventListener('click', function () {
            chatFieldHeader.style.opacity = "1";
            chatFieldHeader.style.display = "flex";
            chatFieldHeaderTitle.textContent = item.dataset.title;
            chatFieldModal.style.right = '-500px';
        });
    });
});
