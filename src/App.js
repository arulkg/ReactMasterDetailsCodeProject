import './App.css';
import { BrowserRouter, Routes,Router, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Blogs from './Components/Blogs';
import NoPage from './Components/NoPage';
import Movies from './Components/Movies';


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="blogs" element={<Blogs/>}/> 
          <Route path="movies" element={<Movies/>} />
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
