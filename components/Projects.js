import React from 'react';

import Project from './Project';

const Projects = ({projects}) => {
  return (
    <div className="w-full pt-4">
      <div className="container max-w-screen-lg mx-auto">
        <div className="w-full">
          <div
            className="grid w-full grid-flow-row col-span-1 row-start-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {
              projects.sort((a, b) => a.status - b.status).map((project, i) => (
                <Project key={i} project={project}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
