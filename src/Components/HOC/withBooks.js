import React, { useState } from "react";

function WithBooks(Component){
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
    const [books,setBooks] = useState(initialState);
    // const [error, setError] = useState({});

    return function(props){
        return(
            <Component {...props}  books={books} />
        )
    }
}
export default WithBooks;