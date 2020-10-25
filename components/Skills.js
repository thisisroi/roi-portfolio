import React from 'react';

import ProgressBar from './ProgressBar';

function Skills({skills}) {
  return (
    <div className="w-full md:w-2/6">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="w-full">
            {
              skills.map((skill, i) => (
                <ProgressBar
                  key={i}
                  title={skill.name}
                  background={skill.color}
                  completed={skill.percent}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
