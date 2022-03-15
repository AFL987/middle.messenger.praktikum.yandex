
import {validation} from './validation';

export const getFormData = (form, page) => {
    let result = {};
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
    };
    return result;
};

export const verificationSubmitValues = (form, page) => {
    const values: Record<string, string> = getFormData(form, page);
    let resultValid = validValuesInput(values);

    switch (page) {
        case 'home':
            break;
        case 'pagePasswordChange':
            const error = checkEqualityPasswords(values.password, values.passwordRepeat);
            return {...resultValid, passwordRepeat: {value: '', messageError: error}}
            break;
        case 'profileSetting':
            break;
        case 'pageSignUp':
            break;
        case 'pageSignIn':
            break;
        default:
    }
}
export const checkEqualityPasswords = (password, passwordRepeat) => {
    if (password && passwordRepeat) {
        return password !== passwordRepeat ? 'Пароли не совпадают!' : '';
    }
}

const validValuesInput = (values) => {
    let result = {};
    Object.keys(values).forEach(key => {
        result[key] = validation(values[key], key)
    })
    return result;
}
