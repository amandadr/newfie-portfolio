import React from "react";
import { Image, Text } from "@fluentui/react-components";

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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: skill.color,
        color: "white",
        border: "0.2em solid rgba(175, 175, 175, 0.3)",
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
      <Text weight="semibold" style={{ fontSize: "0.8em" }}>
        {skill.name}
      </Text>
    </div>
  );
};

export default SkillIcon;
