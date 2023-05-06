import Posts from './Posts';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import NotFound from './components/NotFound'
import Header from './components/Header';


function App() {
  return (
    <>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes> 
  </>

  );
}

export default App;
