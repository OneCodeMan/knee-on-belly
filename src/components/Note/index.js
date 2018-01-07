import React, { Component } from 'react';
import './styles.css';

const Note = ({ term, definition, studyMode }) => {
  return (
      <div className="note">
        <p className="term">
          {term}
        </p>

        <div className={studyMode ? "study-mode" : null}>
          <ul class="definition">
            {definition.map((point, i) => {
              return (
                <li
                  key={i}
                  dangerouslySetInnerHTML={ {__html: point} }
                >
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  );
}

export default Note;
