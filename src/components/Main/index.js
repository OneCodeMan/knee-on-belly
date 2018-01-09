import React from 'react';
import appData from '../../data/notesdata.json';
import Notebook from '../Notebook';
import Note from '../Note';
import './styles.css';

const Main = () => (
  <div>
    <h1 className="project-title">
      Psych 2AP3 study guide
    </h1>
    {appData.topics.map((topic, i) => {
      return (
        <div key={i}>
          <h1 className="topic-title">{topic.topic_title}</h1>
          <Notebook notes={topic.content} />
        </div>
      );
    })}
  </div>
);

export default Main;
