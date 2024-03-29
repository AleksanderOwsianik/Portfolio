import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />{' '}
          <Route path='/register' element={<Register />} />{' '}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
