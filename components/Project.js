import React from 'react';
import Ripples from 'react-ripples';

const STATUS_LIST = [
  {
    name: "NEW",
    color: "teal",
  },
  {
    name: "Coming Soon",
    color: "blue",
  },
  {
    name: "Active",
    color: "green",
  },
  {
    name: "Maintenance",
    color: "orange",
  },
  {
    name: "It's over",
    color: "gray",
  },
  {
    name: "Closed",
    color: "yellow",
  },
];

export default function Project({project}) {

  return (
    <Ripples
      className="transition duration-150 transform rounded-md shadow hover:-translate-y-1 bg-gray-normal"
      during={900}
    >
      <a
        href={project.to}
        className="flex flex-wrap w-full h-24 px-4 py-4 rounded-md bg-gray-normal"
      >
        <div className="flex w-full">
          <div className="w-full">
            <h1 className="flex items-center text-white">
              {project.name}
              {project.status && (
                <span
                  className={`px-2 mx-2 text-xs text-${STATUS_LIST[project.status - 1].color}-400
                    bg-${STATUS_LIST[project.status - 1].color}-500
                    bg-opacity-25 rounded-full select-none
                  `}
                >
                  {STATUS_LIST[project.status - 1].name}
                </span>
              )}
            </h1>
          </div>
        </div>
        <div className="w-full">
          <p className="pt-1 pb-6 text-xs text-gray-light">
            {project.description}
          </p>
        </div>
      </a>
    </Ripples>
  )
}