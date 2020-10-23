import Link from "next/link";
import FadeIn from "react-fade-in";
import Journey from "./Journey";
import config from "../config";
import Projects from "./Projects";
import ProgressBar from "./ProgressBar";
import Skills from "./Skills";

const Header = (props) => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <div className="flex flex-wrap items-start justify-start w-full">
          <div className="flex w-full md:w-1/5">
            <div className="flex justify-center w-full md:justify-start">
              <img className="rounded-lg" src={props.image} width="192" />
            </div>
          </div>
          <div className="flex flex-no-wrap justify-center w-full h-full py-2 mt-1 mr-0 md:mr-3 md:py-0 md:w-12 md:flex-wrap md:space-y-2">
            {config.about.social_links.map((link, i) => (
              <a
                href={link.to}
                className={`flex items-center justify-center w-10 h-10 mr-2 text-${link.color}-400 bg-${link.color}-500 transition duration-150 hover:bg-opacity-50 bg-opacity-25 rounded-lg md:mr-0`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap items-center justify-center text-center md:text-left md:justify-start">
              <div className="w-full">
                <h1 className="text-2xl font-semibold text-white">
                  {props.name}
                </h1>
              </div>
              <div className="w-full py-1 -mt-1">
                <span className="text-sm font-medium text-gray-bright">
                  {props.job}
                </span>
              </div>
              <div className="w-full">
                <p className="text-sm font-medium text-gray-light">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-48">
            <Journey
              experience={config.journey.experience}
              projects={`${config.journey.total_projects}+ Projects`}
              job={config.journey.work}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full space-y-4 md:space-x-4 md:flex-no-wrap">
        <div className="w-full pt-4">
          <Projects />
        </div>
        <div className="w-full md:w-2/6">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Header;
