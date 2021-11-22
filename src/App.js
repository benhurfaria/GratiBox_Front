import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './assets/GlobalStyle';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Plans from './components/pages/Plans';
import Sign from './components/pages/Sign';
import Details from './components/pages/Details';
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
          <Route exact path="/plans" element={<Plans />} />
          <Route exact path="/sign" element={<Sign />} />
          <Route exact path="/details" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </ContextLogin.Provider>
  );
}
