import React from "react";
import Icon from "./Icon";
import { SkillsObject } from "@/types/componentTypes";

const skillsFrontend: SkillsObject = {
  skillType: "Frontend",
  skills: [
    { name: "HTML", iconName: "bxl-html5" },
    { name: "React", iconName: "bxl-react" },
    { name: "Git", iconName: "bxl-git" },
    { name: "Redux", iconName: "bxl-redux" },
    { name: "Typescript", iconName: "bxl-typescript" },
    { name: "Javascript", iconName: "bxl-javascript" },
  ],
};

const skillsBackend: SkillsObject = {
  skillType: "Backend",
  skills: [
    { name: "Node JS", iconName: "bxl-nodejs" },
    { name: "Python", iconName: "bxl-python" },
    { name: "Docker", iconName: "bxl-docker" },
    { name: "AWS", iconName: "bxl-aws" },
    { name: "MongoDB", iconName: "bxl-mongodb" },
    { name: "PostgreSQL", iconName: "bxl-postgresql" },
  ],
};

interface SkillSectionProps {
  skillsObject: SkillsObject;
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsObject }) => (
  <div className="flex flex-col py-8 px-16 max-w-[26rem] items-center justify-center gap-4 font-semibold border rounded-2xl">
    <p>{skillsObject.skillType}</p>
    <div className="grid grid-cols-2 gap-12">
      {skillsObject.skills.map((skill) => (
        <div className="flex gap-2 items-center" key={skill.name}>
          <Icon name={skill.iconName} size="24px" className="bx-tada" />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => (
  <section
    id="skills"
    className="pt-24 md:pt-44 lg:mx-6 mx-4 gap-4 items-center flex flex-col"
  >
    <h1 className="text-5xl text-center font-extrabold">Skills</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:pt-32 pt-16">
      <SkillSection skillsObject={skillsFrontend} />
      <SkillSection skillsObject={skillsBackend} />
    </div>
  </section>
);

export default Skills;
