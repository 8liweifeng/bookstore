import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../store/booksSlice';
import { Book } from '../store/type';

interface Props {
  book?: Book;
  onClose: () => void;
}

const BookForm: React.FC<Props> = ({ book, onClose }) => {
  const [formData, setFormData] = useState<Book>(book || { id: '', name: '', price: '', category: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (book) {
      dispatch(updateBook(formData));
    } else {
      dispatch(addBook({ ...formData, id: Date.now().toString() }));
    }
    onClose();
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={handleSubmit}>
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
               type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
               type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
               type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
        <textarea className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                  name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save
        </button>
        <button type="button" onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookForm;