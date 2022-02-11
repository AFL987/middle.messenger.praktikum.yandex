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


    // Открытие/закрытия модального окна для ВЫБОРА добавления/удаления пользователя чата
    let chatFieldHeaderPointers = document.querySelector('#chat_field_header_pointers');
    let chatFieldModal = document.querySelector('#chat_field_modal');
    chatFieldHeaderPointers.addEventListener('click', () => {
        if(chatFieldModal.style.right === '-500px') chatFieldModal.style.right = '0';
        else chatFieldModal.style.right = '-500px';
    })


    // Открытие/закрытия модального окна добавления/удаления пользователя чата
    let chatFieldModalAddUser = document.querySelector('#chat_field_modal_add_user');
    let chatFieldModalDeleteUser = document.querySelector('#chat_field_modal_delete_user');
    chatFieldModalAddUser.addEventListener('click', () => {
        document.querySelector('#modal_add_user .modal_container').style.bottom = '0'
        putVeil(true)
    })
    chatFieldModalDeleteUser.addEventListener('click', () => {
        document.querySelector('#modal_delete_user .modal_container').style.bottom = '0'
        putVeil(true)
    })



    // закрытие модального окна по клику на вуаль
    let veilIsCasuallyThrownOnAChair = document.querySelector('#veil_is_casually_thrown_on_a_chair');
    veilIsCasuallyThrownOnAChair.addEventListener('click', () => {
        document.querySelectorAll('.modal_container').forEach( item => {
            item.style.bottom = '-200%'
        })
        putVeil(false)
    })

})
