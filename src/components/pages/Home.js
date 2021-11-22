import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Main,
  Image,
  Title,
  SubTitle,
  Button,
  Grato,
  Footer,
  Support,
} from '../styles/Home_Style';
import { getStoredUser } from '../../Services/loginPersistence.js';

export default function Home() {
  const history = useNavigate();
  useEffect(() => {
    const user = getStoredUser();
    if (user !== null) {
      history('/sign-in');
    }
  }, []);
  return (
    <Main>
      <Title margin="53px">Bem vindo ao GratiBox</Title>
      <SubTitle>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </SubTitle>
      <Support>
        <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image05.webp" />
        <Footer>
          <Link to="/sign-up">
            <Button width="202px" height="45px" size="18px">
              Quero começar
            </Button>
          </Link>
          <Link to="/sign-in">
            <Grato>Já sou grato</Grato>
          </Link>
        </Footer>
      </Support>
    </Main>
  );
}
