import React from "react";
import style from "./Homepage.module.css";
import { useNavigate } from "react-router";
import Header from "../header/Header.jsx";
import FakeProducts from "../products/FakeProducts.jsx";
import Footer from "../footer/Footer.jsx";
import DummyProducts from "../products/DummyProducts.jsx";

const HomePage = () => {
    const navigate = useNavigate();

    const handleFakeClick = () => {
        navigate("/fake_store_products");
    };

    const handleDummyClick = () => {
        navigate("/dummy_store_products");
    }

    const handleCartClick = () => {
        navigate("/cart");
    }

    return (
        <>
            <Header />
            <div className={style.HomePage}>
                <h1>Welcome To Our Store</h1>
                <p>Discover a variety of products that suit your needs.</p>

                <div className={style.buttonContainer}>
                    <button onClick={handleFakeClick}>Get All Fake Products</button>
                    <button onClick={handleDummyClick}>Get All Dummy Products</button>
                </div>

                <section className={style.aboutSection}>
                    <h2>About Us</h2>
                    <p>
                        We are dedicated to providing the best products at unbeatable prices. Our mission is to ensure customer satisfaction through quality and service.
                    </p>
                </section>

                <section className={style.productsSection}>
                    <h2>Featured Products</h2>
                    <FakeProducts />
                    <DummyProducts />
                </section>

                <section className={style.cartSection}>
                    <h2>Your Cart</h2>
                    <p>Add items to your cart and check out seamlessly.</p>
                    <button onClick={handleCartClick} className={style.cartButton}>View Cart</button>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
