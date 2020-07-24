import React from 'react';
import logo from './logo.svg';
import './App.css';

import SkillsBox from './Components/SkillsBox/SkillsBox';

function App () {
  const general = ['MVC design pattern'];
  const frontEnd = {
    general: ['JavaScript (ES6)', 'CSS3', 'HTML5', 'RestAPI', 'Progressive Web Apps (PWA)'],
    frameworks: ['React', 'React Native', 'Angular'],
  };
  const backEnd = {
    server: ['Express', 'Koa'],
    db: {
      sqlDB: ['SQL databases', 'Postgress', 'Sequelize'],
      noSqlDB: ['noSQL databases', 'MongoDB', 'Mongoose'],
    },
    dataStructures: ['Data Structures'],
  };

  function showAlistOf (list, cssClass) {
    return list.map((el, i) => {
      return <li id={i} className={cssClass}>{el}</li>
    });
  }

  return (
    <div className="App">
      <h1>Juan Sánchez</h1>
      <p>Training at @codeworks</p>
      <SkillsBox
        title='Front End'
        showAlistOf={showAlistOf}
        skills={frontEnd}
      ></SkillsBox>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
