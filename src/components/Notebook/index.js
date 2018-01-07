import React, { Component } from 'react';
import Note from '../Note';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import './styles.css';

class Notebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      studyMode: false,
    }

    this.toggleStudyMode = this.toggleStudyMode.bind(this);
  }

  toggleStudyMode() {
    this.setState({ studyMode: !this.state.studyMode });
  }

  render() {
    return (
      <div>
        <label>
          <Toggle
            defaultChecked={this.state.studyMode}
            onChange={this.toggleStudyMode}
          />
          <span>Study Mode</span>
        </label>

        <ol className="notebook">
          {this.props.notes.map((note, i) => {
            return (
              <li key={i}>
                <Note
                  term={note.term}
                  definition={note.definition}
                  studyMode={this.state.studyMode} 
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

}

export default Notebook;
