export const simulateRequest = async (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getCookieByName = (name) => {
  const cookieList = document.cookie.split(';');
  const cookie = cookieList.find((stringCookie) => {
    const sanitizedCookie = stringCookie.trim();
    return sanitizedCookie.split('=')[0] === name;
  });
  return cookie?.split('=')[1];
};

export const writeCookie = (name, value) => {
  //Vue.$cookies.set(name, value, 60 * 60 * 24);
  document.cookie = `${name}=${value}`;
};


export const delete_cookie = ( name ) => {
  document.cookie = name + '=; Max-Age=0'
}