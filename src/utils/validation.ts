/* eslint-disable indent */

export const validation = (value: string, type: string): Record<string, string> => {
    switch (type) {
        case 'password':
            return passwordVerification(value);
        case 'text':
            return textVerification(value);
        case 'email':
            return emailVerification(value);
        case 'tel':
            return telVerification(value);
        default:
            return {value, messageError: ''};
    }
};

const passwordVerification = (value) => {
    const pattern = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}/g;
    const result = value.match(pattern);
    const error = result ? '' : 'Простой пароль!';
    return {value: value, messageError: error};
};
const textVerification = (value) => {
    const error = value.length > 2 ? '' : 'Не менее 3 символов!';
    return {value: value, messageError: error};
};
const emailVerification = (value) => {
    const pattern = /[^@]+@[a-z]+(\.[a-z]+)/g;
    const result = value.match(pattern);
    const error = result ? '' : 'Не верная почта!';
    return {value: value, messageError: error};
};
const telVerification = (value) => {
    const pattern = /(?=.*[0-9]){5,}/g;
    const result = value.match(pattern);
    const error = result ? '' : 'Неверный телефон!';
    return {value: value, messageError: error};
};
