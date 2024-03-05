const connection = require('../database-mysql/index');

function signup(name,email, password,nationality) {
  if (!email || !password) {
    return Promise.reject({ error: 'Username and password are required fields' });
  }

  return connection.execute('INSERT INTO users (name,email, password,nationality) VALUES (?,?,?, ?)', [name,email, password,nationality])
    .then(() => ({ message: 'User registered successfully' }))
    .catch((err) => {
      console.error(err.message);
      throw { error: 'Internal Server Error' };
    });
}

function login(email, password) {
  if (!email || !password) {
    return Promise.reject({ error: 'Email and password are required fields' });
  }

  return connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password])
    .then(([results]) => {
      if (results.length === 0) {
        throw { error: 'Invalid email or password' };
      }

      return { message: 'Login successful' };
    })
    .catch((err) => {
      console.error(err.message);
      throw { error: 'Internal Server Error' };
    });
}

const getUsers=()=> {
  return connection.execute('SELECT * FROM users')
    .then(([results]) => results)
    .catch((err) => {
      console.error(err.message);
      throw { error: 'Internal Server Error' };
    });
}

module.exports = { signup, login ,getUsers};