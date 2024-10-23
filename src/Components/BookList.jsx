import React, { useState } from "react";
import "./BookList.css";
import BookListItem from "./BookListItem";
const initialState = [
    {
      id: 1,
      title: 'JavaScript—The Comprehensive Guide,',
      author: 'Philip Ackermann',
      isbn: '978-3836286299',
      rating: 5,
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert Martin',
      isbn: '978-0132350884',
      rating: 2
    },
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      isbn: '978-0201633610',
      rating: 5,
    },
  ];

function BookList(){

  const [books,setBooks] = useState(initialState);


  function handleRating(id,rating){
   
      books.map((book)=>{
        if(book.id===id){
          setBooks([...books,{rating:rating}])
        }
        else{
          return book;
        }
      })

      setBooks(
        books.map(book=>{
          if(book.id === id){
            return {...book,rating:rating}
          }
          else{
            return book;
          }
        })
      )
 
  }

  if(books.length === 0){
    return(
      <div>No Books Found.</div>
    )
  }

    return(
        <>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {
                books.map(book=>(
                  <BookListItem key={book.id} books={book} onRate={handleRating}/>
                ))
            }
            </tbody>
            <tfoot>

            </tfoot>
        </table>
        </>
    )
}
export default BookList;