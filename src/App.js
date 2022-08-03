import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import NavSideBar from './components/NavSideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavSideBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;