import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addBook,deleteBook } from '../store/booksSlice';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { Book } from '../store/type'; 
import { RootState } from '../store/store';

interface Props {
  initialBooks: Book[];
}


const Home: NextPage<Props> = ({ initialBooks }) => {
  const dispatch = useDispatch();
  const [editingBook, setEditingBook] = useState<Book | null>(null); // Add this line
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const books = useSelector((state: RootState) => state.books.books);
  useEffect(() => {
    
    
    if (books.length === 0) {
      initialBooks.forEach(book => {
        dispatch(addBook(book));
      });
    }
      
  }, [dispatch, initialBooks]);


  const handleAddBook = () => {
    setShowForm(true);
    setIsEditing(false);
    setEditingBook(null);
  };

  const handleEdit = (book: Book) => {
    setEditingBook(book);  
    setIsEditing(true);  
    setShowForm(true);  
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditingBook(null)
  };

  // const handleDelete = (id: string) => {
  //   dispatch(deleteBook(id));
  // };

  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-3xl font-bold text-center mb-4">Bookstore</h1>
      <button onClick={handleAddBook} className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Book
      </button>
      {showForm && (
      <BookForm
        book={editingBook}
        onClose={handleCloseForm}
        isEditing={isEditing}
      />
    )}
     <BookList onEdit={handleEdit}/>
    </div>
  );
};

export async function getStaticProps() {
  const initialBooks: Book[] = [
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

  return {
    props: {
      initialBooks,
    },
  };
}

export default Home;

 