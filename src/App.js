import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyle';
import Home from './components/pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sign-in" />
      </Routes>
    </BrowserRouter>
  );
}
