import FadeIn from "react-fade-in";

const Journey = (props) => {
  const journeyItems = [
    {
      name: props.experience,
      icon: "grade",
      desc: "Experience",
    },
    {
      name: props.projects,
      icon: "developer_board",
      desc: "All projects",
    },
    {
      name: props.job,
      icon: "whatshot",
      desc: "Current Job",
    },
  ];
  return (
    <div className="flex flex-wrap max-w-screen-md mx-auto">
      <div className="px-12 ml-1 lg:px-0 lg:ml-0">
        <FadeIn delay={150}>
          <div className="w-full">
            <h1 className="text-lg font-semibold text-white">My Journey</h1>
          </div>
        </FadeIn>
        <FadeIn delay={250}>
          <div className="w-full">
            <div className="grid grid-flow-row col-span-3 row-start-3 gap-5 py-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {journeyItems.map((item, i) => (
                <div key={i} className="flex w-full">
                  <div className="flex items-center justify-center w-16 h-16 px-5 bg-yellow-500 rounded-lg">
                    <i className="material-icons text-cdark">{item.icon}</i>
                  </div>
                  <div className="flex flex-wrap items-center justify-start w-full px-4">
                    <div className="w-full">
                      <h1 className="font-semibold text-white">{item.name}</h1>
                    </div>
                    <div className="w-full">
                      <p className="-mt-4 text-xs font-medium text-yellow-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Journey;
