import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AVShuffle from 'material-ui/svg-icons/av/shuffle';
import Note from '../Note';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './styles.css';

class Notebook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      studyMode: false,
      notes: props.notes
    }

    this.toggleStudyMode = this.toggleStudyMode.bind(this);
  }

  toggleStudyMode() {
    this.setState({ studyMode: !this.state.studyMode });
  }

  shuffleNotes() {
    alert("shuffling");
  }

  render() {
    return (
      <div className="notebook">
        <div className="feature study-mode-wrapper">
          <label>
            <Toggle
              defaultChecked={this.state.studyMode}
              onChange={this.toggleStudyMode}
            />
            <span>Study Mode</span>
          </label>
        </div>

        <div className="feature shuffle-wrapper">
           <RaisedButton
             icon={<AVShuffle />}
             primary={true}
            />
        </div>

        <ol className="notebook">
          {this.state.notes.map((note, i) => {
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
