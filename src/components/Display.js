/*
Author: Portia Maile
Date: June 5, 2023

This  React component displays a list of books to the user and allows the user to search for books from the list.
*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Display.css';
import React from 'react';



const Display = () => {
  //rendering the list of books
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


useEffect(() => {
   //fetching books from the api
    axios.get("https://anapioficeandfire.com/api/books").then((response) => {
      setBooks(response.data);
      
    });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredBooks = books.filter((book) => {
        return book.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

    return(
        <>
        <h2>Welcome to GBOBooks</h2>
        <div className='search'>
      
        <input
        className='input'
        type="text"
        placeholder="Search book names... e.g A clash of.."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <br></br>
      <br></br>
   
   <div className='class-grid'>
      {filteredBooks.map((book) => (
        <div className='card' key={book.name} >
        <h3>Book Name: {book.name}</h3>
        <br/>
        <img src={getImageForBook(book.name)} alt={book.name} />
        <p>Publisher: {book.publisher}</p>
        <p>Country: {book.country}</p>
        <p>Media Type: {book.mediaType}</p>
        </div>
    
        ))}
   </div>
   </>
   
    );

    
}

const getImageForBook = (bookName) => {
    const bookImages = {
      
      'A Game of Thrones': 'https://th.bing.com/th/id/OIP.LlDr1imlRYTpCGeTbXcnrQHaHa?pid=ImgDet&rs=1',
      'A Clash of Kings': 'https://th.bing.com/th/id/OIP.hRGO3UhmH5JvZU38UaosSwHaLX?pid=ImgDet&rs=1',
      'A Storm of Swords': 'https://th.bing.com/th/id/OIP.HvKlE8FO6mpUSxFcrrVZoQHaLX?pid=ImgDet&rs=1',
      'The Hedge Knight': 'https://th.bing.com/th/id/R.ce338f96dea48b7e7b50b244b2e64674?rik=KjTkilsrq96ijA&pid=ImgRaw&r=0',
      'The Sworn Sword': 'https://th.bing.com/th/id/R.46cc66acf0c1babcbd154c2feb71d44b?rik=vnK2Z7R7gRRV2A&pid=ImgRaw&r=0',
      'A Feast for Crows': 'https://th.bing.com/th/id/OIP.6nTALs6TjkHre8bvxROXQwHaMU?pid=ImgDet&rs=1',
      'The Mystery Knight': 'https://th.bing.com/th/id/OIP.AGfveUxs-YBiKHYwm6Q6DAHaLi?pid=ImgDet&rs=1',
      'A Dance with Dragons': 'https://th.bing.com/th/id/R.b42d7805af376165d9464b38ae98adfb?rik=hV3nkUnhMyKAyQ&pid=ImgRaw&r=0',
      'The Princess and the Queen': 'https://th.bing.com/th/id/OIP.533zk4Z9pFrrGFItV-sa_QHaL-?pid=ImgDet&rs=1',
      'The Rogue Prince': 'https://th.bing.com/th/id/OIP.JZZkybHbvD9i-hVYUCy5AgHaLc?pid=ImgDet&rs=1'

      // ...
    };
  
   
    return bookImages[bookName] || '';
}
export default Display;