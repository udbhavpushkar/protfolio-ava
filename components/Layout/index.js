import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ className, children }) => {
    return <div className={className}>
        <Navbar />
        {children}
        <Footer />
    </div>
}

export default Layout