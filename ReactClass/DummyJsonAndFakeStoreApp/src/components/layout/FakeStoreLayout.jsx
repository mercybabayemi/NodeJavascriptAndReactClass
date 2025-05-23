import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import FakeProducts from "../products/FakeProducts.jsx";
import style from "./FakeStoreLayout.module.css";

const FakeStoreLayout = () => {

    return (
        <div className= {style.layout}>
            <Header />
            <FakeProducts />
            <Footer />
        </div>
    )
}

export default FakeStoreLayout;