import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import Head from "next/head";

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
        <Head>
            {/* Open Graph Tags */}
            <meta property="og:title" content="Avantika Nayak" />
            <meta property="og:description" content="Avantika Nayak's porfolio" />
            <meta property="og:image" content="https://avantika-nayak.netlify.app/images/meta-image.png" />
            <meta property="og:url" content="https://avantika-nayak.netlify.app" />
            <meta property="og:type" content="website" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Avantika Nayak" />
            <meta name="twitter:description" content="Avantika Nayak's porfolio" />
            <meta name="twitter:image" content="https://avantika-nayak.netlify.app/images/meta-image.png" />
        </Head>
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