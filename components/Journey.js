import FadeIn from "react-fade-in";
import Skills from "./Skills";

const Journey = (props) => {
  const journeyItems = [
    {
      name: props.experience,
      icon: "grade",
    },
    {
      name: props.projects,
      icon: "developer_board",
    },
    {
      name: props.job,
      icon: "whatshot",
    },
  ];
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <div className="flex items-center justify-center md:flex-col">
        {journeyItems.map((item, i) => (
          <div key={i} className="flex items-center px-3 py-4 space-x-6 rounded-md md:py-0 md:w-full md:pb-6">
            <div className="flex items-center md:w-1/6">
              <span className="flex items-center justify-center w-10 h-10 p-2 text-blue-400 bg-blue-400 bg-opacity-25 rounded-md material-icons">{item.icon}</span>
            </div>
            <div className="w-full">
              <h1 className="text-sm font-medium text-gray-light">{item.name}</h1>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
