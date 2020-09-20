import fetch from 'utils/fetch'

// Node API
// const API = process.env.REACT_APP_API
const API = 'http://localhost:3000';

export default async function login(email: string, password: string) {
  const loginURL = `${API}/login`;
  const data = {
    email,
    password,
  };
  const userData = await fetch(loginURL, {
    method: 'Post',
    body: JSON.stringify(data),
  });

  return userData;
}
