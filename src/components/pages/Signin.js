/* eslint-disable no-unused-expressions */
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { Input, Main } from '../styles/Sign_Style';
import { Title, Button, Grato } from '../styles/Home_Style';
import { ContextLogin } from '../../Services/context';
import { signIn } from '../../Services/Api';
import { storeUser, getStoredUser } from '../../Services/loginPersistence.js';

export default function Signin() {
  const { setLoggedUser } = useContext(ContextLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  function login() {
    const body = {
      email,
      password,
    };
    const promise = signIn(body);
    promise.then((resp) => {
      setLoggedUser(resp.data);
      storeUser(resp.data);
      if (resp.data.services === null) {
        history('/plans');
      } else {
        history('/details');
      }
    });
  }
  return (
    <Main>
      <Title>Bem vindo ao GratiBox</Title>
      <Input
        margin="43px"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        width="237px"
        height="56px"
        size="36px"
        margin="150px"
        onClick={login}
      >
        Login
      </Button>
      <Link to="/sign-up">
        <Grato>Ainda não sou grato</Grato>
      </Link>
    </Main>
  );
}
