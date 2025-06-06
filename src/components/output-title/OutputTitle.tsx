import React from 'react';
import './OutputTitle.scss';

const OutputTitle: React.FC = () => {
  return (
    <h1 className="output-title">
      <pre className="ascii-art">
{`  _    _      _                            _          _   _            _   _       _     _ 
 | |  | |    | |                          | |        | | | |          | | | |     (_)   | |
 | |  | | ___| | ___ ___  _ __ ___   ___  | |_ ___   | |_| |__   ___  | | | | ___  _  __| |
 | |/\\| |/ _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\ | __/ _ \\  | __| '_ \\ / _ \\ | | | |/ _ \\| |/ _\` |
 \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | |_| | | |  __/ \\ \\_/ / (_) | | (_| |
  \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/   \\__|_| |_|\\___|  \\___/ \\___/|_|\\__,_|
`}
      </pre>
    </h1>
  );
};

export default OutputTitle;