import React from "react";
import intelligence from "../../assets/img/intelligence.svg";
import gamedev from "../../assets/img/game-dev.svg";
import design from "../../assets/img/design.svg";

import {
  ImageSection,
  SkillsSection,
  Title,
  ServicesSection,
} from "../../components";

function About() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Typescript"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Python"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Lua"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"Java"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"76%"} width={"76%"} />
      </div>

      <Title title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}

export default About;
