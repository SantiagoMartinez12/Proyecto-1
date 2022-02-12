
import './App.css';
import Leinster from './componentes/leinster';
import getCervezas from  './store/actions/index.js'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Carta from './componentes/carta';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  
  useEffect (() => {
    dispatch(getCervezas() );
    },[dispatch])
  return (
    <div>
      <Routes >
        <Route path='/' element={<Leinster />}></Route>
        <Route path='/carta' element={<Carta />}></Route>
      </Routes>

    </div>
    
  );
}

export default App;
