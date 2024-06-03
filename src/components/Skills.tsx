import React from "react";
import { Image, Text } from "@fluentui/react-components";

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
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={imageUrl}
        fit="cover"
        style={{
          zIndex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          filter: "brightness(0.85)",
          outline: "0.5em inset rgba(70, 70, 70, 0.1)",
          outlineOffset: "-0.5em",
        }}
      />
      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "2em",
          gap: "1em",
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: skill.color,
              color: "white",
              borderRadius: "50%",
              width: "15vmin",
              height: "15vmin",
              minWidth: "7em",
              minHeight: "7em",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              gap: "0.2em",
            }}
          >
            <i
              className={skill.class}
              style={{ fontSize: "2em", marginTop: "0.15em" }}
            ></i>
            <Text weight="semibold" style={{ fontSize: "0.8em" }}>{skill.name}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
