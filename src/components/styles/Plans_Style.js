import styled from 'styled-components';

const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #e5cdb3;
  border-radius: 10px;
  margin-top: 50px;
`;

const Image = styled.img`
  height: 218px;
  border-radius: 10px;
  border: none;
`;

const Main = styled.div`
  width: 100vw;
  display: flex;
  padding: 60px 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Texto = styled.p`
    color: #4D65A8;
    text-align: center;
    font-weight: bold;
`;

export { Container, Image, Main, Texto };
