export const BookActions = {
  SET_BOOKS: 'books/SET_BOOKS',
  ADD_BOOK: 'books/ADD_BOOK',
  REMOVE_BOOK: 'books/REMOVE_BOOK',
  UPDATE_BOOK: 'books/UPDATE_BOOK',
  LOAD_BOOKS: 'books/LOAD_BOOKS',
};

export function setBooks(payload) {
  return { type: BookActions.SET_BOOKS, payload };
}

export function addBook(payload) {
  return { type: BookActions.ADD_BOOK, payload };
}

export function removeBook(payload) {
  return { type: BookActions.REMOVE_BOOK, payload };
}

export function updateBook(payload) {
  return { type: BookActions.UPDATE_BOOK, payload };
}

export function loadBooks() {
  return async (dispatch) => {
    await dispatch({type: BookActions.LOAD_BOOKS});
  };
}
