// export const writeCookie = (name, value) => {
//     document.cookie = `${name}=${value}`;
// }

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
  document.cookie = `${name}=${value}`;
};
