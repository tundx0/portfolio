import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "Trello Clone",
      description: "A Trello-like task management application",
      techStack: "React, TypeScript, Styled Components, Context API",
      image: "/trello.png",
      url: "https://treloclone.netlify.app",
    },
    {
      title: "Filmpire",
      description: "A movie database and information application",
      techStack: "React, JavaScript, Redux Toolkit Query, Material UI",
      image: "/filmp.png",
      url: "https://filmp.netlify.app",
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-24 md:pt-44 lg:mx-6 mx-4 gap-4 items-center flex flex-col"
    >
      <h1 className="text-5xl text-center font-extrabold">Portfolio</h1>
      <div className="md:pt-32 pt-16 grid md:grid-cols-2 grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Tech Stack: {project.techStack}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Go to site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
