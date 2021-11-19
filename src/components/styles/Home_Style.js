import styled from 'styled-components';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  border: none;
`;

const Title = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  color: #ffffff;
  margin-top: ${(props) => props.margin};
`;
const SubTitle = styled.p`
  width: 341px;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 10px;
  background-color: #8c97ea;
  color: #ffffff;
  font-weight: bold;
  margin-top: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  :focus {
    outline: transparent;
  }
`;

const Grato = styled.p`
  width: ${(props) => props.width};
  height: 28px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Support = styled.div`
  width: 100%;
  background-color: #4d65a8;
`;

export { Main, Image, Title, SubTitle, Button, Grato, Footer, Support };
