export type SignUpRequest = {
    firstName: string,
    secondName: string,
    login: string,
    email: string,
    password: string,
    phone: string,
}

export type userRequest = {
    firstName: string,
    secondName: string,
    displayName: string,
    login: string,
    email: string,
    phone: string,
}

export type changePasswordRequest = {
    oldPassword: string,
    newPassword: string,
    passwordRepeat?: string,
}
