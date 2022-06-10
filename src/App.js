import Layout from './components/layouts/Layout.js'
import Home from './components/pages/Home.js';
import Signin from './components/pages/Signin.js';
import Contact from './components/pages/Contact.js';
import PageNotFound from './components/pages/404.js';

import './App.css';

function App() {
  return (
    <Layout>
    <Home/>
    </Layout>
  );
}

export default App;
