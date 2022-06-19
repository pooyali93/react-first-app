import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from './components/layouts/Layout.js'
import Home from './components/pages/Home.js';
import Signin from './components/pages/Signin.js';
import Contact from './components/pages/Contact.js';
import PageNotFound from './components/pages/404.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter> 
  );
}

export default App;
