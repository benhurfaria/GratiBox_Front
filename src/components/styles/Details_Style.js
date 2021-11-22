import styled from 'styled-components';

const Detail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #4d65a8;
  font-weight: bold;
  span {
    color: #e63c80;
    font-size: 18px;
  }
`;

const Container = styled.div`
  height: 420px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 0 10px;
  border-radius: 10px;
  margin-top: 50px;
`;

const Info = styled.p`
  font-size: 18px;
`;

const InfoProd = styled.p`
  font-size: 18px;
  color:#e63c80;
  font-weight: 400;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #4d65a8;
  font-weight: bold;
  span {
    color: #e63c80;
    font-size: 18px;
  }
`;

const Next = styled.p`
    font-size: 18px;
    margin-left: 60px;
    width: 100%;
    color: #e63c80;
    font-weight: bold;
`;

const Span = styled.span`
  font-size: 18px;
`;

export { Detail, Info, Next, Container, InfoProd, Footer, Span };
