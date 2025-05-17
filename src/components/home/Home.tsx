import React from "react";
import "./Home.scss";
import CommandLine from "../command-line/CommandLine";
import OutputTitle from "../output-title/OutputTitle";
import { GetRoles, GetAge, GetLinks, GetTechStack } from "./HomeInfoData";
import OutputSection from "../output-section/OutputSection";

/**
 * Home component displays the developer's information, including roles, tech stack, and links.
 * @returns Home component
 */
const Home: React.FC = () => {
  const roles = GetRoles();
  const techStack = GetTechStack();
  const links = GetLinks();
  const age = GetAge();

  return (
    <div className="home-container">
      <CommandLine prompt={`whoami`} />
      <OutputTitle />

      <span className="construction-indicator">
        Oops! You've stumbled upon my ego. It's still under construction.
      </span>
      <div className="developer-info">
        <p>👤 Name: Raphael Teixeira</p>
        <p>🌎 Location: Brasília, Brazil</p>
        <p>🎂 Age: {age}</p>

        <p>💻 Roles:</p>
        <div className="roles">
          {roles.map((role) => (
            <p key={role}>{role}</p>
          ))}
        </div>

        <p>🛠️ Stack:</p>
        <div className="tech-stack">
          {techStack.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>

        <OutputSection title="Links" list={links} isLink={true} />

        <p>
          <span className="emoji">&#9888;</span> Status: Still debugging life...
        </p>
      </div>
      <CommandLine prompt={``} />
    </div>
  );
};

export default Home;
