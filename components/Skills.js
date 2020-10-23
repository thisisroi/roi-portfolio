import FadeIn from "react-fade-in";
import config from "../config";
import ProgressBar from "./ProgressBar";

const Skills = (props) => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <div className="w-full">
          {config.skills.map((skill, i) => (
            <div key={i}>
              <ProgressBar
                title={skill.name}
                background={skill.color}
                completed={skill.percent}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
