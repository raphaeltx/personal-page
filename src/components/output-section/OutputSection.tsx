import React from "react";
import { InfoDataProp, OutputSectionProps } from "./OutputSectionProps";

/**
 * OutputSection component displays a list of items, either as links or roles.
 * @param {OutputSectionProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const OutputSection: React.FC<OutputSectionProps> = ({
  list,
  isLink = false,
  title,
}) => {
  return (
    <div className="output-section">
      <p className="output-title">{title}</p>
      {isLink ? (
        <div className="output-items">
          {list.map((item: InfoDataProp) => (
            <div key={item.text}>
              <span>{item.text} → </span>
              <a href={item.link} className="output-link">
                {item.link}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="output-items">
          {list.map((item: InfoDataProp) => (
            <div key={item.text}>{item.text}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OutputSection;
