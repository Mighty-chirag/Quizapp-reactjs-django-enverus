
import './App.css';
import Navbar from './components/Navbar';

import { useEffect, useState } from 'react';
import Startpage from './components/Startpage';
import { API_URL } from './constants';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import QuestionAPI from './components/QuestionAPI';
import { useGlobalContext } from './context/DataContext';
import { APIProvider } from './context/APIContext';

function App() {
  const {startQuiz,data}=useGlobalContext()
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/'
            element={startQuiz && <Startpage  startQuiz={startQuiz}  data={data}/>}>

      </Route>
      <Route path='/addQuestions'
            element={
              <APIProvider>
                  <QuestionAPI/>
              </APIProvider>
            
            }>

      </Route>

      </Routes>
      


  </Router>
  );
}

export default App;
