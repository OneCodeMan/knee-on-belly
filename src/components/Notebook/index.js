import React, { Component } from 'react';
import Note from '../Note';

const Notebook = ({ notes }) => {
  return (
    <ol className="notebook">
      {notes.map((note, i) => {
        return (
          <li key={i}>
            <Note term={note.term} definition={note.definition} />
          </li>
        );
      })}
    </ol>
  );
}

export default Notebook;
