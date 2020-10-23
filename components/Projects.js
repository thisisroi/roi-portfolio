import Link from "next/link";
import ProgressBar from "./ProgressBar";
import config from "../config";
import Ripples from "react-ripples";

const Projects = (props) => {
  const status_list = [
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
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="w-full">
        <div className="grid w-full grid-flow-row col-span-1 row-start-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {config.projects.map((project, i) => (
            <Ripples
              className="transition duration-150 transform rounded-md shadow hover:-translate-y-1 bg-gray-normal"
              during={900}
            >
              <a
                href={project.to}
                key={i}
                className="flex flex-wrap w-full h-24 px-4 py-4 rounded-md bg-gray-normal"
              >
                <div className="flex w-full">
                  <div className="w-full">
                    <h1 className="flex items-center text-white">
                      {project.name}
                      {project.status ? (
                        <span
                          className={`px-2 mx-2 text-xs text-${
                            status_list[project.status - 1].color
                          }-400 bg-${
                            status_list[project.status - 1].color
                          }-500 bg-opacity-25 rounded-full select-none`}
                        >
                          {status_list[project.status - 1].name}
                        </span>
                      ) : (
                        ""
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
