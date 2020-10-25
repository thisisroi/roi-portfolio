import React from 'react';

import JourneyItem from './JourneyItem';

const Journey = ({experience, projects, job}) => {
  const journeyItems = [
    {
      name: experience,
      icon: "grade",
    },
    {
      name: projects,
      icon: "developer_board",
    },
    {
      name: job,
      icon: "whatshot",
    },
  ];

  return (
    <div className="w-full md:w-48">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex items-center justify-center md:flex-col">
            {
              journeyItems.map((item, i) => (
                <JourneyItem key={i} item={item}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
