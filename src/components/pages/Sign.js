import { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Title, SubTitle } from '../styles/Home_Style';
import {
  Main,
  Container,
  Image,
  Marcar,
  Item,
  Input,
  Label,
  Auxiliar,
} from '../styles/SignPlan_Style';
import { ContextLogin } from '../../Services/context';

export default function Sign() {
  const { loggedUser } = useContext(ContextLogin);
  const [setaPlano, setSetaPlano] = useState(false);
  const [setaEntrega, setSetaEntrega] = useState(false);
  const [setaRecebe, setSetaRecebe] = useState(false);
  const [opcoesPlano, setOpcoesPlano] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [quero, setQuero] = useState(false);
  const [plano, setPlano] = useState('');

  useEffect(() => {});
  return (
    <Main>
      <Title>Bom te ver por aqui, @{loggedUser.name}.</Title>
      <SubTitle margin="40px">
        “Agradecer é arte de atrair coisas boas”
      </SubTitle>
      <Container>
        <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image03.jpg" />
        <Marcar height={opcoesPlano ? '70px' : '44px'}>
          <Auxiliar>
            <Item>Plano</Item>
            {opcoesPlano ? (
              ''
            ) : (
              <IoIosArrowDown
                onClick={() => {
                  setOpcoesPlano(!opcoesPlano);
                  if (entrega) setEntrega(!entrega);
                  if (quero) setQuero(!quero);
                }}
              />
            )}
          </Auxiliar>
          {opcoesPlano ? (
            <Auxiliar>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlano}
                  onChange={() => setSetaPlano(!setaPlano)}
                />
                Mensal
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlano}
                  onChange={() => setSetaPlano(!setaPlano)}
                />
                Semanal
              </Label>
            </Auxiliar>
          ) : (
            ''
          )}
        </Marcar>
        <Marcar height={entrega ? '70px' : '44px'}>
          <Auxiliar>
            <Item>Entrega</Item>
            {entrega ? (
              ''
            ) : (
              <IoIosArrowDown
                onClick={() => {
                  setEntrega(!entrega);
                  if (opcoesPlano) setOpcoesPlano(!opcoesPlano);
                  if (quero) setQuero(!quero);
                }}
              />
            )}
          </Auxiliar>
          {entrega ? (
            <Auxiliar>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlano}
                  onChange={() => setSetaPlano(!setaPlano)}
                />
                Mensal
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlano}
                  onChange={() => setSetaPlano(!setaPlano)}
                />
                Semanal
              </Label>
            </Auxiliar>
          ) : (
            ''
          )}
        </Marcar>
        <Marcar height={quero ? '70px' : '44px'}>
          <Auxiliar>
            <Item>Quero receber</Item>
            {quero ? (
              ''
            ) : (
              <IoIosArrowDown
                onClick={() => {
                  setQuero(!quero);
                  if (opcoesPlano) setOpcoesPlano(!opcoesPlano);
                  if (entrega) setEntrega(!entrega);
                }}
              />
            )}
          </Auxiliar>
          {quero ? (
            <Auxiliar>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlano}
                  onChange={() => setSetaPlano(!setaPlano)}
                />
                Mensal
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlano}
                  onChange={() => setSetaPlano(!setaPlano)}
                />
                Semanal
              </Label>
            </Auxiliar>
          ) : (
            ''
          )}
        </Marcar>
      </Container>
    </Main>
  );
}
