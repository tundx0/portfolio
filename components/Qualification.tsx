import Icon from "./Icon";

const Qualification: React.FC = () => {
  const timelineItems = [
    {
      title: "Backend Developer Intern",
      company: "HNG",
      location: "Remote, Nigeria",
      date: " Sept 2022 - Nov 2022",
    },
    {
      title: "Software Engineer",
      company: "Wellnite Inc.",
      location: "Remote, US",
      date: "Nov 2022 - Present",
    },
  ];

  return (
    <section
      id="qualification"
      className="pt-24 md:pt-44 lg:mx-6 mx-4 gap-4 items-center flex flex-col"
    >
      <h1 className="text-5xl text-center font-extrabold">Qualifications</h1>
      <div className="md:pt-32 pt-16">
        <div className="relative border-l border-gray-200">
          {timelineItems.map((item, index) => (
            <div className="mb-10 ml-6" key={index}>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <Icon name="bx-check-circle" className="bx-tada" />
              </span>
              <div className="flex items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item?.title}
                </h3>
              </div>
              <h4 className=" text-base font-medium">{item?.company}</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item?.date}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item?.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
