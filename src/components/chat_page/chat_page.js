import putVeil from "../../utils/putVeil";

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


    // Открытие/закрытия модального окна для добавления/удаления пользователя чата
    let chatFieldHeaderPointers = document.querySelector('#chat_field_header_pointers');
    let chatFieldModal = document.querySelector('#chat_field_modal');
    let chatFieldModalOpen = false;
    chatFieldHeaderPointers.addEventListener('click', () => {
        if(!chatFieldModalOpen) chatFieldModal.style.right = '0';
        else chatFieldModal.style.right = '-500px';
        chatFieldModalOpen = !chatFieldModalOpen;
    })


    // Открытие/закрытия модального окна
    let chatFieldModalAddUser = document.querySelector('#chat_field_modal_add_user');
    let chatFieldModalDeleteUser = document.querySelector('#chat_field_modal_delete_user');
    chatFieldModalAddUser.addEventListener('click', () => {
        putVeil(true)
    })
    chatFieldModalDeleteUser.addEventListener('click', () => {
        putVeil(true)
    })



    // закрытие модального окна по клику на вуаль
    let veilIsCasuallyThrownOnAChair = document.querySelector('#veil_is_casually_thrown_on_a_chair');
    veilIsCasuallyThrownOnAChair.addEventListener('click', () => {
        putVeil(false)
    })

})
