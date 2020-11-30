import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Chinese", value: "zh" },
  { label: "Africans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text:</label>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </div>
      </div>
      <Dropdown
        onSelectedChange={setLanguage}
        selected={language}
        options={options}
        instructions="Selected a Language"
      />
      <hr></hr>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
