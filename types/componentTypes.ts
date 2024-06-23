export type Skill = {
  name: string;
  iconName: string;
};

export type SkillsObject = {
  skillType: string;
  skills: Skill[];
};
