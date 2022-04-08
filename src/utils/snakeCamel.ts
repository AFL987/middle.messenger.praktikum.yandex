
export const snakeToCamel = (obj) => {
    let result = {};
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            result[value.replace(/(\_\w)/g, (k) => k[1].toUpperCase())] = obj[value];
        }
    }
    return result;
};

export const camelToSnake = (obj) => {
    let result = {};
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            result[value.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)] = obj[value];
        }
    }
    return result;
};
