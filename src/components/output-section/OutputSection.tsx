import React from "react";
import { List, OutputSectionProps } from "./OutputSectionProps";

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
          {list.map((item: List) => (
            <p key={item.text}>
              <span>{item.text} → </span>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </p>
          ))}
        </div>
      ) : (
        <div className="output-items">
          {list.map((item: List) => (
            <p key={item.text}>{item.text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default OutputSection;
