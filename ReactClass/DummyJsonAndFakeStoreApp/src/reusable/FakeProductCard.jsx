import React from "react";
import styles from "./FakeProductCard.module.css"

const FakeProductCard = ({ products, isLoading, isError }) => {
    console.log(products);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching products!</div>;
    }

    return (
        <div className={styles.productGrid}>
            {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <h2 className={styles.productTitle}>{product.name}</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p className={styles.productPrice}>Price: ${product.price}</p>
                    <button className={styles.productButton}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default FakeProductCard;