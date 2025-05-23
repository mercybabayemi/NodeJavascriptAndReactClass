import React from "react";
import FakeProducts from "../products/FakeProducts.jsx";
import DummyProducts from "../products/DummyProducts.jsx";

const CombinedProducts = () => {
    return (
        <div>
            <h1>All Products</h1>
            <FakeProducts />
            <DummyProducts />
        </div>
    );
};

export default CombinedProducts;