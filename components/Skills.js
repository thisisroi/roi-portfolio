import FadeIn from "react-fade-in";

const Skills = (props) => {
  return (
    <div className="flex flex-wrap max-w-screen-md mx-auto">
      <div className="px-12 ml-1 lg:px-0 lg:ml-0">
        <FadeIn delay={350}>
          <div className="w-full py-3">
            <h1 className="text-lg font-semibold text-white">Skills</h1>
          </div>
        </FadeIn>
        <FadeIn delay={450}>
          <div className="w-full">
            <div className="grid grid-flow-row col-span-3 row-start-3 gap-3 py-3 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
              {props.skills.map((item, i) => (
                <div key={i} className="flex flex-wrap w-full">
                  <h1 className="w-full px-4 py-1 mb-3 -mt-4 text-xs font-medium text-yellow-500 rounded-full bg-softdark">
                    {item.name} (%{item.percent})
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Skills;
