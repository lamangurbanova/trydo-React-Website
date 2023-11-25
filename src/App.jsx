import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';

const App = () => {
  return (
    <>

    <Header/>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
     </Routes>
      
    </>
  )
}

export default App;
