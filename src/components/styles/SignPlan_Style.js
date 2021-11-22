import styled from 'styled-components';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 40px 25px;
  flex-direction: column;
  align-items: center;
  svg{
    color: #fff;
    font-size: 30px;
  }
`;

const Container = styled.div`
  height: 410px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 0 10px;
  border-radius: 10px;
  margin-top: 50px;
`;

const Image = styled.img`
  height: 172px;
  border-radius: 10px;
  border: none;
`;

const Marcar = styled.div`
    width: 100%;
    height: ${(props) => props.height};
    background: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    svg{
        color: #4D65A8;
    }
`;
const Auxiliar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5px;
`;

const Item = styled.p`
    font-weight: bold;
    color: #4D65A8;
`;

const Input = styled.input`
  background: #ffffff;
  border-radius: 10px;
  width: 15px;
  height: 15px;
  margin-bottom: 10px;
  margin-top: ${(props) => props.margin};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  border: 1px solid #604848;
  padding-left: 15px;
  :focus {
    outline: transparent;
  }
  input::placeholder{
    color: #604848;
  }
`;
const InputN = styled.input`
  background: rgba(224, 209, 237, 0.62);
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 10px;
  margin-top: ${(props) => props.margin};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  border: 1px solid #604848;
  padding-left: 15px;
  :focus {
    outline: transparent;
  }
  input::placeholder{
    color: #4D65A8;
  }
`;
const Label = styled.label`
    font-size: 18px;
    color: #4D65A8;
`;

export { Main, Container, Image, Marcar, Item, Input, Label, Auxiliar, InputN };
