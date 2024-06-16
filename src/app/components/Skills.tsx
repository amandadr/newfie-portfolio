"use client";
import React from "react";
import Image from "next/image";
import SkillIcon from "components/SkillIcon";

interface Skill {
  color: string;
  name: string;
  class: string;
}

interface SkillsProps {
  skills: Skill[];
  imageUrl: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, imageUrl }) => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center"
    >
      <Image
        alt="Skills"
        src={imageUrl}
        fill
        className="absolute object-cover w-full aspect-square z-1 filter-[brightness(0.85)] outline-[0.5em] inset-[rgba(70,70,70,0.1)] outline-offset-[-0.5em]"
      />
      <div
        className="relative z-3 text-[2.5em] text-white font-medium text-shadow-[5px 2px 8px #232] bg-[rgba(100,100,100,0.65)] rounded-full px-[0.4em] pt-[0.1em] pb-[0.2em] text-center mt-[0.75em] mb-[0.25em] flex items-center justify-center h-[1em] max-h-[1em] w-[fit-content] shadow-[1px 1px 0 1px rgba(50,50,50,0.91)]"
      >
        Skills:
      </div>
      <div
      className="z-2 relative flex flex-wrap justify-center items-center max-h-[95%] p-[2em] gap-[1em]"
      >
        {skills.map((skill, i) => (
          <SkillIcon skillKey={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
