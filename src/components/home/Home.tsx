import React from "react";
import "./Home.scss";
import CommandLine from "../command-line/CommandLine";
import OutputTitle from "../output-title/OutputTitle";
import OutputSection from "../output-section/OutputSection";
import {
  GetPersonalLinks,
  GetPersonalInfo,
  GetPersonalRoles,
  GetPersonalStack,
  GetAdditionalInfo,
} from "../../data/InfoData";

/**
 * Home component displays the developer's information, including roles, tech stack, and links.
 * @returns Home component
 */
const Home: React.FC = () => {
  const roles = GetPersonalRoles();
  const techStack = GetPersonalStack();
  const links = GetPersonalLinks();
  const personalInfo = GetPersonalInfo();
  const additionalInfo = GetAdditionalInfo();

  return (
    <div className="home-container">
      <CommandLine prompt={`whoami`} showCursor={false} />
      <OutputTitle />

      <span className="construction-indicator">
        {additionalInfo.construction.value}
      </span>
      <div className="developer-info">
        {personalInfo.map((info, index) => (
          <p key={index}>
            <span>{info.label}</span> {info.value}
          </p>
        ))}

        <OutputSection title="Roles:" list={roles} isLink={false} />
        <OutputSection title="Stack:" list={techStack} isLink={false} />
        <OutputSection title="Links:" list={links} isLink={true} />

        <p>
          <span className="emoji">&#9888;</span> {additionalInfo.status.label}{" "}
          {additionalInfo.status.value}
        </p>
      </div>
      <CommandLine prompt={``} showCursor={true} />
    </div>
  );
};

export default Home;
