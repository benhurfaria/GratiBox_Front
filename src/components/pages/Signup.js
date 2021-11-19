/* eslint-disable no-alert */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Button } from '../styles/Home_Style';
import { Input, Main } from '../styles/Sign_Style';
import { signUp } from '../../Services/Api';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const history = useNavigate();

  function signUpUser() {
    const body = {
      name,
      email,
      password,
    };

    if (password === confirm) {
      const promise = signUp(body);
      promise.then(() => {
        alert('cadastro feito com sucesso');
        history('/sign-in');
      });
    } else {
      alert('Senhas não coincidem');
    }
  }
  return (
    <Main>
      <Title margin="0px">Bem vindo ao GratiBox</Title>
      <Input
        margin="43px"
        placeholder="Nome"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
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
      <Input
        placeholder="Confirme a senha"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button width="237px" height="56px" size="36px" margin="60px" onClick={signUpUser}>
        Cadastrar
      </Button>
    </Main>
  );
}
