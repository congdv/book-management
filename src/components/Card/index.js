import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeBook } from '../../store/book';
import IconClear from '../icons/clear';
import './style.css';

export default ({ book, ...rest }) => {
  const { id, name, description, price, category } = book;
  const dispatch = useDispatch();

  const shortDescription = (desc) => {
    // Maximum words is 35
    let words = description.split(' ');
    if (words.length > 35) {
      desc = words.slice(0, 35).join(' ') + '...';
    }
    return desc;
  };

  const handleDelete = (bookId, name) => (e) => {
    e.stopPropagation();
    dispatch(removeBook(bookId));
    toast.warn(`You have removed '${name}' book`);
  };

  return (
    <div className="card" {...rest}>
      <div className="card-header">{name}</div>
      <div className="card-content">
        <div className="category">#{category}</div>
        <div className="description">{shortDescription(description)}</div>
      </div>
      <div className="card-footer">
        <div className="price">${price}</div>
        <button className="delete" onClick={handleDelete(id, name)}>
          <IconClear />
        </button>
      </div>
    </div>
  );
};
