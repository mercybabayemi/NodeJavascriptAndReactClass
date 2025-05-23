import React from "react";
import style from "./DummyStoreLayout.module.css";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import DummyProducts from "../products/DummyProducts.jsx"

const DummyStoreLayout = () => {
    return(
        <div className= {style.layout}>
            <Header />
            <DummyProducts />
            <Footer />
        </div>
    );
};

export default DummyStoreLayout;