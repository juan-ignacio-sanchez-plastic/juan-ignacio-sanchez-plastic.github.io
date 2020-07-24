import React from 'react';

function SkillsBox ({ showAlistOf, title, skills }) {
  return (
    <div>
      <h1 style={styles.title}>{title}</h1>
      <ul>
        {console.log(Object.keys(skills))}
        {
          Object.keys(skills).map(group => <ul>
            <p>{group}</p>
            {showAlistOf(skills[group], 'blue')}
          </ul>)
        }
      </ul>
    </div>
  );
}

const styles = {
  title: {
    backgroundColor: 'red',
  }
}

export default SkillsBox;
