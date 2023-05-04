import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    useEffect(() => {
        alert("لطفا با VPN روشن وارد شوید");
    }, []);
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;