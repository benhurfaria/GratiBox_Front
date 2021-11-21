import { useContext } from 'react';
import { Title, SubTitle, Button } from '../styles/Home_Style';
import { Main, Image } from '../styles/SignPlan_Style';
import { ContextLogin } from '../../Services/context';
import { Detail, Info, Next, Container, InfoProd, Footer } from '../styles/Details_Style';

export default function Details() {
  const { loggedUser } = useContext(ContextLogin);
  return (
    <Main>
      <Title>Bom te ver por aqui, @{loggedUser.name}</Title>
      <SubTitle margin="40px">
        “Agradecer é arte de atrair coisas boas”
      </SubTitle>
      <Container>
        <>
        <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image03.jpg" />
        <Detail>
            <Info>Plano:</Info>
            <span>@tipo_de_plano</span>
        </Detail>
        <Detail>
            <Info>Data da assinatura:</Info>
            <span>dd/mm/aa</span>
        </Detail>
        <Detail>
            <Info>Proximas entregas:</Info>
        </Detail>
            <Next>dd/mm/aaaa</Next>
            <Next>dd/mm/aaaa</Next>
            <Next>dd/mm/aaaa</Next>
        </>
        <Footer>
            <InfoProd>Chá</InfoProd>
            <InfoProd>Produtos organicos</InfoProd>
            <InfoProd>Incensos</InfoProd>
        </Footer>
      </Container>
      <Button with="237px" height="56px" size="24px" margin="20px">Avaliar entregas</Button>
    </Main>
  );
}
