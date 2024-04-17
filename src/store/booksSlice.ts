import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../store/type';

interface BooksState {
  books: Book[];
}


function saveBooksToLocalStorage(books: Book[]) {
  localStorage.setItem('myBooks', JSON.stringify(books));
}

function loadBooksFromLocalStorage() {
  if (typeof window === "undefined") {
     
    return [];
  }
 
  const booksString = localStorage.getItem("myBooks");
  return booksString ? JSON.parse(booksString) : []; 
}

const initialState: BooksState = {
  books: loadBooksFromLocalStorage(),  
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
      saveBooksToLocalStorage(state.books);
    },
    updateBook(state, action: PayloadAction<Book>) {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;  
        saveBooksToLocalStorage(state.books);  
      }
    },
    deleteBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload);
      saveBooksToLocalStorage(state.books);
    },
     
  },
});


export const { addBook, updateBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;