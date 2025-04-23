import React from 'react'
import styles from "./bookList.module.css"

const BookList = () => {
    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore","" +
        "The Master and the Margarita"
    ];

    // const deleteHandler =(item) => {
    //     bookList.filter((book)=> book !== item);
    // }

    return (
        <div id={styles.wrapper}>
            <header>
                <div id={styles.pageBanner}>
                    <h1 className={styles.title}> Book Collections</h1>
                    <p>Books</p>
                    <form id={styles.searchBooks}>
                        <input type="text" placeholder="Search books..."/>
                    </form>
                </div>
            </header>
            <div id={styles.bookList}>
                <h2 className={styles.bookList}>Books to Read</h2>
                <ul>
                    {
                        bookList.map((book,index) => (
                            <li key={index}>
                                <span className = {styles.name}>{book}</span>
                                <span className = {styles.delete} onClick={()=> deleteHandler(book)}>delete</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <form id={styles.addBook}>
                <input type="text" placeholder="Add a book..."/>
                <button>Add</button>
            </form>

        </div>
    )
}

export default BookList;