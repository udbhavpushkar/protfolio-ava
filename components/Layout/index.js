import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ className, children }) => {
    const scrollToTop = () => {
        if (window) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
    return <div className={className}>
        <Navbar />
        <div style={{ marginTop: "94.17px" }}>
            {children}
        </div>
        <div className="rounded-full fixed bg-[#FF8099] text-white flex justify-center items-center cursor-pointer" onClick={scrollToTop} style={{ width: "50px", height: "50px", bottom: "25px", left: "25px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
            </svg>
        </div>
        <Footer />
    </div>
}

export default Layout