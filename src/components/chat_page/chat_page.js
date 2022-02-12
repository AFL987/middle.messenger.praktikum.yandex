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


    // Открытие/закрытие полей для внесения изменений в профиль
    let profileDataChangeLinkData = document.querySelector('#profile_data_change_link_data');
    let profileDataChangeLinkPassword = document.querySelector('#profile_data_change_link_password');
    let profileDataContainerForLine = document.querySelectorAll('.profile_data_container_for_line');
    let profileButtonExit = document.querySelectorAll('.profile_data_container_for_line button.exit');
    profileDataChangeLinkData.addEventListener('click', () => {
        profileOpenChange(1)
    })
    profileDataChangeLinkPassword.addEventListener('click', () => {
        profileOpenChange(2)
    })
    profileButtonExit[0].addEventListener('click', () => {
        profileOpenChange(0)
    })
    profileButtonExit[1].addEventListener('click', () => {
        profileOpenChange(0)
    })
    function profileOpenChange (int) {
        profileDataContainerForLine.forEach( item => {
            item.style.height = '0';
        })
        profileDataContainerForLine[int].style.height = 'auto';
    }


    // Выйти из аккаунта
    let logOutOfProfile = document.querySelector('#log_out_of_profile');
    logOutOfProfile.addEventListener('click', () => {
        document.location.href = "./index.html";
    })
})
