/**
 *
 * @param email
 * @param password
 * @returns {Promise}
 */
function signin( { email, password } ) {
  return new Promise(( resolve, reject ) => {
    if( password === '123456' ) {
      const token = 'JWT';
      resolve({
        token
      });
      setSession(token);
    } else {
      reject({
        error: 'Email/Password not valid'
      });
    }
  });
}

/**
 *
 * @param email
 * @param password
 */
function signup( { email, password } ) {
  const token = 'JWT';
  return new Promise(resolve => {
    resolve({
      token
    });
    setSession(token);
  });
}

/**
 *
 * @param token
 */
function setSession( token ) {
  localStorage.setItem('token', token);
}

/**
 * Remove session
 */
function signout() {
  localStorage.removeItem('token');
}

/**
 *
 * @returns {boolean}
 */
function isLoggedIn() {
  return !!localStorage.getItem('token');
}

/**
 *
 * @param next
 */
function protectRoute( next ) {
  if( isLoggedIn() ) {
    next('/');
  }
  next();
}

export default {
  signin,
  signup,
  signout,
  setSession,
  isLoggedIn,
  protectRoute,
}