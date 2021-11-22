/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { Title, SubTitle, Button } from '../styles/Home_Style';
import {
  Main,
  Container,
  Image,
  Marcar,
  Item,
  Input,
  Label,
  Auxiliar,
  InputN,
} from '../styles/SignPlan_Style';
import { ContextLogin } from '../../Services/context';
import { detailsSign } from '../../Services/Api.js';

export default function Sign() {
  const { loggedUser } = useContext(ContextLogin);
  const [setaPlanoSemanal, setSetaPlanoSemanal] = useState(false);
  const [setaPlanoMensal, setSetaPlanoMensal] = useState(false);
  const [opcoesPlano, setOpcoesPlano] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [quero, setQuero] = useState(false);
  const [primeiraOpcao, setPrimeiraOpcao] = useState(false);
  const [segundaOpcao, setSegundaOpcao] = useState(false);
  const [terceiraOpcao, setTerceiraOpcao] = useState(false);
  const [chas, setChas] = useState(false);
  const [incensos, setIncensos] = useState(false);
  const [produtos, setProdutos] = useState(false);
  const [endereco, setEndereco] = useState(false);
  const [proximo, setProximo] = useState('Proximo');
  const [name, setName] = useState('');
  const [endEntrega, setEndEntrega] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estadouf, setEstadouf] = useState('');
  const history = useNavigate();
  function statusPlano() {
    let plano;
    let dataEntrega;
    let produto = '';
    if (setaPlanoMensal) {
      plano = 'mensal';
    }
    if (setaPlanoSemanal) {
      plano = 'semanal';
    }
    if (primeiraOpcao) {
      if (setaPlanoSemanal) {
        dataEntrega = 'segunda';
      }
      if (setaPlanoMensal) {
        dataEntrega = '01';
      }
    }
    if (segundaOpcao) {
      if (setaPlanoSemanal) {
        dataEntrega = 'quarta';
      }
      if (setaPlanoMensal) {
        dataEntrega = '10';
      }
    }
    if (terceiraOpcao) {
      if (setaPlanoSemanal) {
        dataEntrega = 'sexta';
      }
      if (setaPlanoMensal) {
        dataEntrega = '20';
      }
    }
    if (chas) {
      produto += 'cha ';
    }
    if (produtos) {
      produto += 'produtos ';
    }
    if (incensos) {
      produto += 'incensos ';
    }
    const body = {
      plano,
      dataEntrega,
      produto,
      name,
      endEntrega,
      cep,
      cidade,
      estadouf,
      id: loggedUser.id,
    };
    const promise = detailsSign(body);
    promise.then(() => {
      history('/details');
    });
  }
  return (
    <Main>
      <Title>Bom te ver por aqui, @{loggedUser.name}.</Title>
      <SubTitle margin="40px">
        “Agradecer é arte de atrair coisas boas”
      </SubTitle>
      <Container>
        <Image src="https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image03.jpg" />
        {endereco ? <>
          <InputN placeholder="Nome completo" width="290px" height="44px" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <InputN placeholder="Endereço de entrega" width="290px" height="44px" type="text" value={endEntrega} onChange={(e) => setEndEntrega(e.target.value)}/>
          <InputN placeholder="CEP" width="290px" height="44px" value={cep} onChange={(e) => setCep(e.target.value)}/>
          <Auxiliar>
            <InputN placeholder="Cidade" width="168px" height="44px" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
            <InputN placeholder="Estado" width="108px" height="44px" type="text" value={estadouf} onChange={(e) => setEstadouf(e.target.value)}/>
          </Auxiliar>
        </> : <>
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
                  checked={setaPlanoMensal}
                  onChange={() => {
                    setSetaPlanoMensal(!setaPlanoMensal);
                    if (setaPlanoSemanal) setSetaPlanoSemanal(!setaPlanoSemanal);
                  }}
                />
                Mensal
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={setaPlanoSemanal}
                  onChange={() => {
                    setSetaPlanoSemanal(!setaPlanoSemanal);
                    if (setaPlanoMensal) setSetaPlanoMensal(!setaPlanoMensal);
                  }}
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
                  checked={primeiraOpcao}
                  onChange={() => {
                    setPrimeiraOpcao(!primeiraOpcao);
                    if (segundaOpcao) setSegundaOpcao(!segundaOpcao);
                    if (terceiraOpcao) setTerceiraOpcao(!terceiraOpcao);
                  }}
                />
                {setaPlanoSemanal ? 'segunda' : setaPlanoMensal ? '1' : ''}
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={segundaOpcao}
                  onChange={() => {
                    setSegundaOpcao(!segundaOpcao);
                    if (primeiraOpcao) setPrimeiraOpcao(!primeiraOpcao);
                    if (terceiraOpcao) setTerceiraOpcao(!terceiraOpcao);
                  }}
                />
                {setaPlanoSemanal ? 'quarta' : setaPlanoMensal ? '10' : ''}
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={terceiraOpcao}
                  onChange={() => {
                    setTerceiraOpcao(!terceiraOpcao);
                    if (primeiraOpcao) setPrimeiraOpcao(!primeiraOpcao);
                    if (segundaOpcao) setSegundaOpcao(!segundaOpcao);
                  }}
                />
                {setaPlanoSemanal ? 'sexta' : setaPlanoMensal ? '20' : ''}
              </Label>
            </Auxiliar>
          ) : (
            ''
          )}
        </Marcar>
        <Marcar height={quero ? '90px' : '44px'}>
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
                  checked={chas}
                  onChange={() => {
                    setChas(!chas);
                  }}
                />
                Chás
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={incensos}
                  onChange={() => setIncensos(!incensos)}
                />
                Incensos
              </Label>
              <Label>
                <Input
                  type="checkbox"
                  checked={produtos}
                  onChange={() => setProdutos(!produtos)}
                />
                Produtos organicos
              </Label>
            </Auxiliar>
          ) : (
            ''
          )}
        </Marcar>
        </>}
      </Container>
      <Button width="202px" height="39px" margin="5px" size="24px" onClick={() => {
        if (endEntrega && cep && cidade && estadouf && name && proximo === 'Finalizar') {
          statusPlano();
        }
        if ((setaPlanoSemanal || setaPlanoMensal) && (primeiraOpcao || segundaOpcao || terceiraOpcao) && (chas || incensos || produtos) && proximo === 'Proximo') {
          setProximo('Finalizar');
          setEndereco(!endereco);
        } else if (proximo === 'Proximo') {
          alert('Você não selecionou todos os itens');
        }
      }}>{proximo}</Button>
    </Main>
  );
}
