import React from "react";
import style from "./DummyProducts.module.css";
import DummyProductCard from "../../reusable/DummyProductCard.jsx";
import {useGetAllDummyProductsQuery} from "../../service/DummyStoreApi.jsx";

const DummyProducts = () => {
    const { data: products, isLoading, isError } = useGetAllDummyProductsQuery();
    console.log(products);
    return (
        <div className={style.products}>
            <DummyProductCard products={products} isLoading={isLoading} isError={isError} />
        </div>
    );
};

export default DummyProducts;