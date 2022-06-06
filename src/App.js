import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Products from './Components/Products';
import Client from './Components/Client';
import About from './Components/About';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Download from './Components/Download';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/client' element={<Client></Client>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/download' element={<Download></Download>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
