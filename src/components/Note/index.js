import React, { Component } from 'react';

const Note = ({ term, definition }) => {
  return (
      <div class="note">
        <p class="term">
          {term}
        </p>

        <p class="definition">
          {definition}
        </p>
      </div>
  );
}

export default Note;
