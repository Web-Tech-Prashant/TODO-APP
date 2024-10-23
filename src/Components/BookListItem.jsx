import PropTypes from "prop-types";
import Rating from "./Rating";

function BookListItem({ books,onRate }) {
  return (
    <>
      <tr>
        <td>{books.title}</td>
        <td>{books.author}</td>
        <td>{books.isbn}</td>
        {/* <td>{books.rating && <span>{"*".repeat(books.rating)}</span>}</td> */}
        <Rating item={books} onRate={onRate}/>
      </tr>
    </>
  );
}
export default BookListItem;

BookListItem.prototypes={
    // books:PropTypes.object.isRequired
    books:PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        author:PropTypes.string.isRequired,
        isbn:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired
    }).isRequired
}