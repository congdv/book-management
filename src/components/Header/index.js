import React, { useState } from 'react';
import Form from '../Form';
import IconAdd from '../icons/add';
import Modal from '../Modal';
import './style.css';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="header">
        <div className="tools">
          <button className="add" onClick={() => setOpen(true)}>
            <span>
              <IconAdd />
            </span>
            Add New Book
          </button>
        </div>
        {/* <input type="text" className="search" placeholder="search book" /> */}
      </div>
      {isOpen && (
        <Modal
          isOpen
          onClose={() => {
            setOpen(false);
          }}
          renderContent={() => <Form onClose={() => setOpen(false)} />}
        />
      )}
    </>
  );
};

export default Header;
