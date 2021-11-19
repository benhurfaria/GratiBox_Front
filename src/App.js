import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './assets/GlobalStyle';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import { ContextLogin } from './Services/context';

export default function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <ContextLogin.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/sign-in" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </ContextLogin.Provider>
  );
}
