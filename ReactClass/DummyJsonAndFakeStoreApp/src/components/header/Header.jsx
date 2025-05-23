import React, {useState} from "react";
import style from "./Header.module.css";

const Header = () => {

    const [cartItems, setCartItems] = useState([]);

    const handleCartClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/cart");
            const data = await response.json();
            setCartItems(data.items);
            console.log(cartItems);
        } catch (error){
            console.error("Error fetching cart", error);
        }
    };

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <h1>FakeAndDummyProducts</h1>
                </div>
                <div className={style.navigation}>
                    <nav >
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={style.cart}>
                    <button onClick={handleCartClick} >Cart</button>
                </div>
            </div>
        </header>
    );
};

export default Header;