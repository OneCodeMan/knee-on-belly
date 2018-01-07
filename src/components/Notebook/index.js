import React, { Component } from 'react';
import Note from '../Note';
import './styles.css';

const Notebook = ({ notes }) => {
  return (
    <div>

      <ol className="notebook">
        {notes.map((note, i) => {
          return (
            <li key={i}>
              <Note term={note.term} definition={note.definition} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Notebook;
