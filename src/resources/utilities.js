export const writeCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
}