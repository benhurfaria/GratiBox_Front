const api = process.env.NODE_ENV === 'production'
  ? 'https://back-projeto-gratibox.herokuapp.com/'
  : 'http://localhost:4000/';

export { api };
