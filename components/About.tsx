"use client";
import Image from "next/image";
import { UilFileAlt } from "@iconscout/react-unicons";

const About: React.FC = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1gk5T1Y6-K999oql3j8XbKms9f2AJ1XjJ";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="about"
      className="pt-24 md:pt-44 lg:mx-6 mx-4 gap-4 items-center"
    >
      <h1 className="text-5xl text-center font-extrabold">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:pt-32 pt-16">
        <Image
          className="bg-cover rounded-xl justify-self-center w-75 h-75 grayscale"
          alt="image"
          width={300}
          height={300}
          src="/ola_pic.png"
        />
        <div className="flex flex-col gap-4 text-gray-400">
          <p className=" text-wrap">
            I started my journey in web development with a strong curiosity for
            how web technologies work together to create seamless user
            experiences. Over the past 1.5 years, I&apos;ve had the privilege of
            working on diverse projects that have honed my skills in both
            front-end and back-end development.
          </p>
          <button
            onClick={handleDownloadClick}
            className="w-40 flex gap-2 items-center justify-center rounded-xl text-white bg-black px-2 py-3 font-medium"
          >
            Download CV
            <UilFileAlt />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
