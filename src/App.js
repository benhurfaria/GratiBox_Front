import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route exact path="/"/>        
            </Routes>
        </BrowserRouter>
    );
}