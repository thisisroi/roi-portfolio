import Link from "next/link";

const Projects = (props) => {
  return (
    <div className="flex flex-wrap max-w-screen-lg mx-auto lg:pl-10 lg:ml-64">
      <div className="px-12 ml-1 lg:px-0 lg:ml-0">
        <div className="w-full">
          <h1 className="text-lg font-semibold text-white">Projects</h1>
        </div>
        <div className="w-full">
          <div className="grid w-full grid-flow-row col-span-3 row-start-3 gap-3 py-3 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
            {props.project.map((project, i) => (
              <Link key={i} href={project.href}>
                <a target="_blank">
                  <div className="w-full px-4 py-4 mb-3 transition duration-150 transform rounded-lg cursor-pointer lg:mb-0 hover:-translate-y-1 text-md bg-softdark">
                    <h1 className="w-full font-semibold text-white text-md">
                      {project.name}
                    </h1>
                    <p className="text-xs text-cgray">{project.status}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
