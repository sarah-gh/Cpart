// export const writeCookie = (name, value) => {
//     document.cookie = `${name}=${value}`;
// }

export const simulateRequest = async (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const getCookieByName = (name) => {
  const cookieList = document.cookie.split(';')
  const cookie = cookieList.find((stringCookie) => {
    const sanitizedCookie = stringCookie.trim()
    return sanitizedCookie.split('=')[0] === name
  })
  // console.log('cookie');
  // console.log(cookie);
  return cookie?.split('=')[1]
}

export const writeCookie = (name, value) => {
  document.cookie = `${name}=${value}`
}

export const deleteCookie = (name) => {
  document.cookie = name + '=; Max-Age=0'
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
