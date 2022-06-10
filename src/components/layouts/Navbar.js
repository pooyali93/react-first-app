function Navbar() {
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <nav>
            <div className="navItem">
                <a href="/">Home</a>
            </div>

            <div className="navItem">
                <a href="/signin">Sign in</a>
            </div>

            <div className="navItem">
                <a href="/contact">Contact us</a>
            </div>
        </nav>
    )

}

export default Navbar;