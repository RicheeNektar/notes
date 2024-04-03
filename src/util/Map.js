export const map = (obj, map) => {
    const newMap = {};

    Object.keys(obj).forEach(key => {
        newMap[key] = map(obj[key], key);
    });

    return newMap;
};