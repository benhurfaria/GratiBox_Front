import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, SubTitle, Button } from '../styles/Home_Style';
import { ContextLogin } from '../../Services/context';
import { Container, Image, Main, Texto } from '../styles/Plans_Style';

export default function Plans() {
  const { loggedUser } = useContext(ContextLogin);
  const history = useNavigate();
  return (
    <Main>
      <Title>Bom te ver por aqui, @{loggedUser.name}.</Title>
      <SubTitle margin="40px">
        Você ainda não assinou um plano, que tal começar agora?
      </SubTitle>
      <Container>
        <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image04.jpg" />
        <Texto>
          Você recebe um box por semana. Ideal para quem quer exercer a gratidão
          todos os dias.
        </Texto>
        <Button
          width="168px"
          height="39px"
          size="24px"
          onClick={() => {
            history('/sign');
          }}
        >
          Assinar
        </Button>
      </Container>
      <Container>
        <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image02.jpg" />
        <Texto>Você recebe um box por mês.</Texto>
        <Texto>Ideal para quem está começando agora.</Texto>
        <Button
          width="168px"
          height="39px"
          size="24px"
          onClick={() => {
            history('/sign');
          }}
        >
          Assinar
        </Button>
      </Container>
    </Main>
  );
}
