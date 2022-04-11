
export const snakeToCamel = (obj: Record<string, string>) => {
    const result: Record<string, unknown> = {};
    for (const value in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, value)) {
            result[value.replace(/(\_\w)/g, (k) => k[1].toUpperCase())] = obj[value];
        }
    }
    return result;
};

export const camelToSnake = (obj: Record<string, any>) => {
    const result: Record<string, unknown> = {};
    for (const value in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, value)) {
            result[value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)] = obj[value];
        }
    }
    return result;
};
