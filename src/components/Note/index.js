import React, { Component } from 'react';
import './styles.css';

const Note = ({ term, definition }) => {
  return (
      <div class="note">
        <p class="term">
          {term}
        </p>

        <ul class="definition">
          {definition.map((point, i) => {
            return (
              <li key={i} dangerouslySetInnerHTML={ {__html: point} }>
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export default Note;
