import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Details from './pages/Details';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import './style/index.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route exact path="/galleria" element={<Home/>}/>
          <Route exact path="/details/product/:id" element={<Details/>}/>
          <Route exact path="/account/register/" element={<Form/>}/>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </main> 
      <Footer/>
    </>
  );
}

export default App;
