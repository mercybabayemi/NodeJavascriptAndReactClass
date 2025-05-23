import React from "react";
import {useGetAllFakeProductsQuery} from "../../service/FakeProductApi.jsx";
import FakeProductCard from "../../reusable/FakeProductCard.jsx";
import style from "./FakeProducts.module.css";

const FakeProducts = () => {
    const { data: products, isLoading, isError } = useGetAllFakeProductsQuery();

    return (
        <div className={style.products}>
            <FakeProductCard products={products} isLoading={isLoading} isError={isError} />
        </div>
    );
};

export default FakeProducts;