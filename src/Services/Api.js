/* eslint-disable no-alert */
import axios from 'axios';
import { api } from './urlApi';

function signUp(body) {
  const route = 'sign-up';

  const promise = axios.post(api + route, body);

  promise.catch((err) => {
    if (err.response.status === 400) {
      alert('Não foi possível cadastrar');
    }

    if (err.response.status === 500) {
      alert('servidor fora de área');
    }

    if (err.response.status === 409) {
      alert('email ja cadastrado');
    }
  });
  return promise;
}

function signIn(body) {
  const route = 'sign-in';
  const promise = axios.post(api + route, body);
  promise.catch((err) => {
    if (err.response.status === 401) {
      alert('Conta não cadastrada');
    }
    if (err.response.status === 500) {
      alert('não foi possivel logar, tente novamente mais tarde');
    }
  });
  return promise;
}

export { signUp, signIn };
