import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Navigation from './pages/shared/Navigation';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        |<Route path='/' element={<Home></Home>} />
        |<Route path='home' element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
