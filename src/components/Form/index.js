import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addBook, updateBook } from '../../store/book';

const Form = ({ onClose, data = null, isEdit = false }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: data ? data.id : null,
      name: data ? data.name : '',
      price: data ? data.price : 0,
      category: data ? data.category : '',
      description: data ? data.description : '',
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (isEdit) {
      dispatch(updateBook(data));
      toast.success('successfully update a book');
    } else {
      dispatch(addBook(data));
      toast.success('successfully add a book');
    }
    onClose();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input name="id" type="hidden" ref={register({ valueAsNumber: true })} />
      <label htmlFor="name">Name</label>
      <input type="text" name="name" ref={register({ required: 'The name field is required' })} />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        step="any"
        ref={register({
          required: 'The price field is required',
          valueAsNumber: true,
          min: {
            value: 0,
            message: 'The number should be positive number',
          },
        })}
      />
      {errors.price && <p className="error">{errors.price.message}</p>}

      <label htmlFor="category">Category</label>
      <input type="text" name="category" ref={register({ required: 'The category field is required' })} />
      {errors.category && <p className="error">{errors.category.message}</p>}

      <label>Description</label>
      <textarea type="text" name="description" ref={register} rows="5" />

      <input type="submit" value={isEdit ? 'Update' : 'Create'} />
    </form>
  );
};

export default Form;
