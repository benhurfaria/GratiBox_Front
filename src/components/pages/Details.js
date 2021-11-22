/* eslint-disable no-restricted-globals */
import { useContext, useEffect, useState } from 'react';
import { MdExitToApp } from 'react-icons/md';
import dayjs from 'dayjs';
import { Title, SubTitle, Button } from '../styles/Home_Style';
import { Main, Image } from '../styles/SignPlan_Style';
import { ContextLogin } from '../../Services/context';
import {
  Detail,
  Info,
  Next,
  Container,
  InfoProd,
  Footer,
  Span,
} from '../styles/Details_Style';
import { getDetails } from '../../Services/Api.js';

export default function Details() {
  const { loggedUser, setLoggedUser } = useContext(ContextLogin);
  const [services, setServices] = useState('');
  const [products, setProducts] = useState([]);
  const [delivery, setDelivery] = useState('');
  const [datas, setDatas] = useState([]);
  function datasEntrega() {
    const today = new Date();
    const dataFormatada = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    let day;
    const dataFormatadaDate = new Date(dataFormatada);
    let arrayDatas = [1];
    arrayDatas = [];
    if (!isNaN(delivery)) {
      dataFormatadaDate.setMonth(dataFormatadaDate.getMonth() + 1);
      arrayDatas.push(`${dataFormatadaDate.getFullYear()}-${dataFormatadaDate.getMonth() + 1}-${delivery}`);
      dataFormatadaDate.setMonth(dataFormatadaDate.getMonth() + 1);
      arrayDatas.push(`${dataFormatadaDate.getFullYear()}-${dataFormatadaDate.getMonth() + 1}-${delivery}`);
      dataFormatadaDate.setMonth(dataFormatadaDate.getMonth() + 1);
      arrayDatas.push(`${dataFormatadaDate.getFullYear()}-${dataFormatadaDate.getMonth() + 1}-${delivery}`);
    }
    if (isNaN(delivery)) {
      if (delivery === 'segunda') day = 1;
      if (delivery === 'quarta') day = 3;
      if (delivery === 'sexta') day = 5;
      let n = 0;
      let num = 1;
      while (n < 3) {
        dataFormatadaDate.setDate(dataFormatadaDate.getDate() + 1);
        if (dataFormatadaDate.getDay() === day) {
          arrayDatas.push(
            `${dataFormatadaDate.getFullYear()}-${
              dataFormatadaDate.getMonth() + 1
            }-${dataFormatadaDate.getDate()}`,
          );
          n += 1;
        }
        num += 1;
      }
    }
    setDatas(arrayDatas);
  }
  useEffect(() => {
    const { id } = loggedUser;
    const promise = getDetails({ id });
    promise.then((resp) => {
      setServices(resp.data.services);
      setProducts(resp.data.products);
      setDelivery(resp.data.deliveryDate);
    });
    datasEntrega();
  }, [delivery]);
  return (
    <Main>
      <MdExitToApp/>
      <Title>Bom te ver por aqui, @{loggedUser.name}</Title>
      <SubTitle margin="40px">
        “Agradecer é arte de atrair coisas boas”
      </SubTitle>
      <Container>
        <>
          <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image03.jpg" />
          <Detail>
            <Info>Plano:</Info>
            <Span>@{services.nameplan}</Span>
          </Detail>
          <Detail>
            <Info>Data da assinatura:</Info>
            <Span>{dayjs(services.signDate).format('DD/MM/YYYY')}</Span>
          </Detail>
          <Detail>
            <Info>Proximas entregas:</Info>
          </Detail>
          {datas.map((data) => (
            <Next>{dayjs(data).format('DD/MM/YYYY')}</Next>
          ))}
        </>
        <Footer>
          {products.map((product) => (
            <InfoProd>{product.productName}</InfoProd>
          ))}
        </Footer>
      </Container>
      <Button with="237px" height="56px" size="24px" margin="20px">
        Avaliar entregas
      </Button>
    </Main>
  );
}
