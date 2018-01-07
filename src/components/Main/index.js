import React from 'react';
import appData from '../../data/data.json';
import Notebook from '../Notebook';
import Note from '../Note';

const Main = () => (
  <div>
    {appData.topics.map((topic, i) => {
      return (
        <div key={i}>
          <h1>{topic.topic_title}</h1>
          <Notebook notes={topic.content} />
        </div>
      );
    })}
  </div>
);

export default Main;
