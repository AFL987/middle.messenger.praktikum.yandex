export const getFormData = (form: HTMLFormElement | any) => {
    const result: Record<string, string> = {};
    if (!form) result;
    const elem = form.elements;
    for (let i = 0; i < elem.length; i++) {
        switch (elem[i].type) {
            case 'submit':
                break;
            case 'radio':
                break;
            case 'checkbox':
                break;
            default:
                result[elem[i].name] = elem[i].value;
        }
    }
    return result;
};

export const verificationSubmitValues = (form: HTMLFormElement, page: string) => {
    const values: Record<string, string> = getFormData(form);
    // let resultValid = validValuesInput(values);
    switch (page) {
        case 'home':
            break;
        case 'pagePasswordChange':
            // const error = checkEqualityPasswords(values.password, values.passwordRepeat);
            return {...values};
            break;
        case 'profileSetting':
            return {...values};
            break;
        case 'pageSignUp':
            // const error = checkEqualityPasswords(values.password, values.passwordRepeat);
            return {...values};
            break;
        case 'pageSignIn':
            return {...values};
            break;
        default:
    }
}
export const checkEqualityPasswords = (password: string, passwordRepeat: string) => {
    if (password && passwordRepeat) {
        return password !== passwordRepeat ? 'Пароли не совпадают' : '';
    }
};

//const validValuesInput = (values: Record<string, string>) => {
//    const result: Record<string, string | unknown> = {};
//    Object.keys(values).forEach((key: string) => {
//        result[key] = validation(values[key], key);
//    });
//    return result;
//};
