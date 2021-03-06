import React, { useState } from "react";
import "./App.css";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";

const items = [
  {
    title: "What is React",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sint.",
  },
  {
    title: "Why use React?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sint.",
  },
  {
    title: "How to use React?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sint.",
  },
];

const options = [
  { label: "Color Red", value: "red" },
  { label: "Color Green", value: "green" },
  { label: "Color blue", value: "blue" },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* 
      <Accordion items={items} />
      <Search />
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
        instructions="Selected a color"
      />
      */}
      <Translate />
    </div>
  );
}

export default App;
