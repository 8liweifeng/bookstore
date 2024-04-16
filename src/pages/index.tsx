import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addBook } from '../store/booksSlice';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const books = [
        { id: '1', name: 'Book1', price: '11.34', category: 'Fiction', description: 'Description here' },
        { id: '2', name: 'Book2', price: '13.45', category: 'Fiction', description: 'Description here' },
        { id: '3', name: 'Book3', price: '12.44', category: 'Fiction', description: 'Description here' },
        { id: '4', name: 'Book4', price: '6.65', category: 'Fiction', description: 'Description here' },
        { id: '5', name: 'Book4', price: '34.76', category: 'Fiction', description: 'Description here' },
        { id: '6', name: 'Book5', price: '10.21', category: 'Fiction', description: 'Description here' },
        { id: '7', name: 'Book6', price: '15.43', category: 'Fiction', description: 'Description here' },
        { id: '8', name: 'Book8', price: '18.87', category: 'Fiction', description: 'Description here' },
        { id: '9', name: 'Book9', price: '20.12', category: 'Fiction', description: 'Description here' },
    ];

    books.forEach(book => {
      dispatch(addBook(book));
    });
  }, [dispatch]);

  const handleAddBook = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-3xl font-bold text-center mb-4">Bookstore</h1>
      <button onClick={handleAddBook} className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Book
      </button>
      {showForm && <BookForm onClose={handleCloseForm} />}
      <BookList />
    </div>
  );
};

export default Home;