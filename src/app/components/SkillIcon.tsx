"use client";
import React from "react";
import { Text } from "@fluentui/react-components";

interface Skill {
  color: string;
  name: string;
  class: string;
}

interface SkillIconProps {
  skill: Skill;
  skillKey: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, skillKey }) => {
  return (
    <div
      key={skillKey}
      className="SkillIcon flex flex-col items-center justify-center text-[#ffffff] border-[0.2em] border-[rgba(175,175,175,0.3)] rounded-full w-[15vmin] h-[15vmin] min-w-[7em] min-h-[7em] shadow-[0px 4px 8px rgba(0,0,0,0.2)] text-center gap-[0.2em]"
      style={{
        backgroundColor: skill.color,
      }}
    >
      <i
        className={skill.class + " mt-[0.15em] text-[2em]"}
      ></i>
      <div className="text-[0.8em] font-medium">
        {skill.name}
      </div>
    </div>
  );
};

export default SkillIcon;
