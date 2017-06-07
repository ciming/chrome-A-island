export const getCoookieName = function(cookie) {
    let name = cookie.replace(/%/g, '');
    return name.slice(0, 7);
}