import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import Modal from '../Modal';
import Form from '../Form';
import './style.css';

export default () => {
  const books = useSelector((state) => state.book);
  const [isOpen, setOpen] = useState(false);
  const [bookSelected, setBook] = useState(null);

  const handleSelectBook = (book) => () => {
    setBook(book);
    setOpen(true);
  };

  return (
    <>
      <div className="logo">Book Shop | Meet quality books </div>
      <div className="container">
        {books.length > 0 ? (
          books.map((book, key) => <Card key={key} book={book} onClick={handleSelectBook(book)} />)
        ) : (
          <div className="empty"> not found any books - please add new book </div>
        )}
      </div>
      {isOpen && (
        <Modal
          isOpen
          onClose={() => {
            setOpen(false);
          }}
          renderContent={() => <Form onClose={() => setOpen(false)} isEdit={true} data={bookSelected} />}
        />
      )}
    </>
  );
};
