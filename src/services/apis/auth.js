async function sleep(msec) {
  await new Promise((resolve) => setTimeout(resolve, msec))
}
function isRequestError() {
  const number = parseInt(Math.random() * 100)
  return number < 12
}
export async function authentication({ userName, password }) {
  console.log({ userName, password })
  await sleep(500);
  if (isRequestError()) {
    throw ('Authentication failed: user name or password is incorrect')
  }
  return {
    userName: {
      firstName: 'Hoan',
      lastName: 'Nguyen',
    },
    email: 'nghoan@gmail.com',
    accessToken: 'this is accessToken',
    accessTokenExpiration: new Date(new Date().setHours(new Date().getHours() + 1)),
    refreshToken: 'this is refreshToken',
    refreshTokenExpiration: new Date(new Date().setDate(new Date().getDate() + 15)),
    role: 'admin',
  }
}