import React from "react";
import "./OutputTitle.scss";

/**
 * Welcome component displays the welcome message in ASCII art.
 * @returns Welcome component
 */
function Welcome() {
  return (
    <pre className="ascii-art">
      {` _       __     __                        
| |     / /__  / /________  ____ ___  ___ 
| | /| / / _ \\/ / ___/ __ \\/ __ \`__ \\/ _ \\
| |/ |/ /  __/ / /__/ /_/ / / / / / /  __/
|__/|__/\\___/_/\\___/\\____/_/ /_/ /_/\\___/ `}
    </pre>
  );
}

/**
 * ToTheVoid component displays an ASCII art representation of "To The Void".
 * @returns ToTheVoid component
 */
function ToTheVoid() {
  return (
    <pre className="ascii-art">
      {`   __           __  __                       _     __
  / /_____     / /_/ /_  ___    _   ______  (_)___/ /
 / __/ __ \\   / __/ __ \\/ _ \\  | | / / __ \\/ / __  /
/ /_/ /_/ /  / /_/ / / /  __/  | |/ / /_/ / / /_/ /
\\__/\\____/   \\__/_/ /_/\\___/   |___/\\____/_/\\__,_/`}
    </pre>
  );
}

/**
 * OutputTitle component displays the title of the output section.
 * It includes a welcome message and a "to the void" message.
 * @returns OutputTitle component
 */
const OutputTitle: React.FC = () => {
  return (
    <div className="output-title-container">
      <div className="welcome">
        <Welcome />
      </div>

      <div className="to-the-void">
        <ToTheVoid />
      </div>
    </div>
  );
};

export default OutputTitle;
