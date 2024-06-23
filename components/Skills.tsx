import React from "react";
import Icon from "./Icon";
import { SkillsObject } from "@/types/componentTypes";

const skillsFrontend: SkillsObject = {
  skillType: "Frontend",
  skills: [
    { name: "HTML", iconName: "html5" },
    { name: "React", iconName: "react" },
    { name: "Git", iconName: "git" },
    { name: "Redux", iconName: "redux" },
    { name: "Typescript", iconName: "typescript" },
    { name: "Javascript", iconName: "javascript" },
  ],
};

const skillsBackend: SkillsObject = {
  skillType: "Backend",
  skills: [
    { name: "Node JS", iconName: "nodejs" },
    { name: "Python", iconName: "python" },
    { name: "Docker", iconName: "docker" },
    { name: "AWS", iconName: "aws" },
    { name: "MongoDB", iconName: "mongodb" },
    { name: "PostgreSQL", iconName: "postgresql" },
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
