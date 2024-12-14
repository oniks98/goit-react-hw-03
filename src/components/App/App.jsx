import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Contact from '../Contact/Contact';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
    </div>
  );
}

export default App;
