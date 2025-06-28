import React from "react";
import { CommandLineProps } from "./CommandLineProps";
import "./CommandLine.scss";

/**
 * CommandLine component displays the host name and the prompt.
 * @param param0 - The props for the component.
 * @returns The rendered component.
 */
const CommandLine: React.FC<CommandLineProps> = ({ prompt, showCursor }) => {
  const userHost = "raph@raph";
  const homeDirectory = "~";
  const promptSymbol = "$";
  const pathSeparator = ":";

  return (
    <div className="command-line-container">
      <span className="userHost">{userHost}</span>
      <span className="pathSeparator">{pathSeparator}</span>
      <span className="homeDirectory">{homeDirectory}</span>
      <span className="promptSymbol">{promptSymbol}</span>
      <span className="prompt"> {prompt}</span>
      {showCursor && <span className="blinking-cursor">{"|"}</span>}
    </div>
  );
};

export default CommandLine;
