import React from "react";
import { Image, Text } from "@fluentui/react-components";
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
        loading="lazy"
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
      <Text
        as="h2"
        weight="semibold"
        style={{
          zIndex: 3,
          position: "relative",
          marginTop: "0.75em",
          marginBottom: "0.25em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "1em",
          maxHeight: "1em",
          width: "fit-content",
          paddingInline: "0.4em",
          paddingTop: "0.1em",
          paddingBottom: "0.2em",
          fontSize: "2.5em",
          color: "white",
          textShadow: "5px 2px 8px #232",
          backgroundColor: "rgba(100, 100, 100, 0.65)",
          borderRadius: "1em",
          boxShadow: "1px 1px 0 1px rgba(50, 50, 50, 0.91)",
        }}
      >
        Skills:
      </Text>
      <div
        style={{
          zIndex: 2,
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "95%",
          padding: "2em",
          gap: "1em",
        }}
      >
        {skills.map((skill, i) => (
          <SkillIcon skillKey={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
