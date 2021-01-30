import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Content />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
