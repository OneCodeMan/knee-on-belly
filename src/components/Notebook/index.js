import React, { Component } from 'react';
import Note from '../Note';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import './styles.css';

const Notebook = ({ notes }) => {
  return (
    <div>

      <label>
        <Toggle
          />
        <span>Study Mode</span>
      </label>

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
