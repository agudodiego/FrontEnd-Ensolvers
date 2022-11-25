import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NotesPage from './pages/NotesPage';
import ArchivedNotesPage from './pages/ArchivedNotesPage';

function App() {

  return (
    <div className="App mt-3">
      <Routes>
        <Route path='/' element={<NotesPage />}/>
        <Route path='/archived' element={<ArchivedNotesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
