import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteBook } from '../store/booksSlice';

const BookList = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      {books.map(book => (
        <div key={book.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
          <div className="flex-grow">
              <p className="text-lg font-semibold">{book.name}</p>
              <p>{book.price}</p>
              <p className="text-sm text-gray-600">{book.category}</p>
            </div>
            <button onClick={() => handleDelete(book.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
              Delete
            </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;