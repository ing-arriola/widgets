import "./App.css";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

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

function App() {
  return (
    <div>
      {/* 
      <Accordion items={items} />
      
      */}

      <Search />
    </div>
  );
}

export default App;
