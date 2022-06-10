import Header from './Header.js'
import Navbar from './Navbar.js';
import Footer from './Footer.js'


function Layout(props) {
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <div className='centerpane'>
          <Header />
          <Navbar />
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )

}

export default Layout;