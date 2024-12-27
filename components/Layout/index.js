import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ className, children }) => {
    return <div className={className}>
        <Navbar />
        <div style={{ marginTop: "94.17px" }}>
            {children}
        </div>
        <Footer />
    </div>
}

export default Layout