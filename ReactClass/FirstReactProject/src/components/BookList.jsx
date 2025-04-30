import React, {useState} from 'react'
import styles from "./bookList.module.css"

const BookList = () => {
    const listOfBooks = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore","" +
        "The Master and the Margarita"
    ];

    const[books, setBooks] = useState(listOfBooks);
    const[newBook, setNewBook] = useState();
    const[searchBookValue, setSearchBookValue] = useState("");

    const deleteHandler =(removeBook) => {
        setBooks(books.filter((book) => (book !== removeBook)))
    }

    const collectBookTitle = (e) => {
        setNewBook(e.target.value.trim())
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(newBook){
            setBooks(prevBook=>[...prevBook, newBook])
        }
    }

    const handleFilterBooks =(e)=>{
        let searchValue = e.target.value.toLowerCase();
        setSearchBookValue(searchValue)
    }
    const filteredBooks = books.filter((book)=> book.toLowerCase().includes(searchBookValue));

    return (
        <div id={styles.wrapper}>
            <header>
                <div id={styles.pageBanner}>
                    <h1 className={styles.title}> Book Collections</h1>
                    <p>Books</p>
                    <form id={styles.searchBooks}>
                        <input type="text" placeholder="Search books..." onKeyUp={handleFilterBooks}/>
                    </form>
                </div>
            </header>
            <div id={styles.bookList}>
                <h2 className={styles.title}>Books to Read</h2>
                <ul>
                    {
                        filteredBooks.map((book,index) => (
                            <li key={index}>
                                <span className = {styles.name}>{book}</span>
                                <span className = {styles.delete} onClick={()=> deleteHandler(book)}>delete</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <form onSubmit={handleSubmit} id={styles.addBook}>
                <input type="text" placeholder="Add a book..." onChange={collectBookTitle}/>
                <button>Add</button>
            </form>

        </div>
    )
}

export default BookList;