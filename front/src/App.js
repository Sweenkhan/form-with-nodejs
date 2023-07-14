import React from 'react'; 
import Home from './Home';
import Login from "./FORM/Login"
import Quiz from './QUIZ/Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
