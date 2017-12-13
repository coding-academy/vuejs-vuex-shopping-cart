import Vue from 'vue';

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

function signup( { email, password } ) {
  const token = 'JWT';
  return new Promise(resolve => {
    resolve({
      token
    });
    setSession(token);
  });
}

function setSession( token, user ) {
  if (!user) return;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

function isLoggedIn() {
  return !!localStorage.getItem('token');
}

function protectRoute( next ) {
  if( isLoggedIn() ) {
    next();
  } else {
    next(false);
  }
}

export default {
  signin,
  signup,
  signout,
  setSession,
  isLoggedIn,
  protectRoute,
}

function signinReal( {email,password} ) {
  return axios.post('http://localhost:3003/login', {username: email, pass: password} )
    .then(res => res.json())
    .then(({token, user}) => {
      console.log('Signedin user:', user);
      setSession(token, user);
      return user;
    })


}
