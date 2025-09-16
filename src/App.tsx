import { useState } from "react";
import "./App.css";
import { BasicAnimation } from "./demos";

const demos = [
  { key: "basic", label: "Basic Animation" },
  { key: "timeline", label: "Timeline" },
  { key: "scroll", label: "ScrollTrigger" },
  { key: "stagger", label: "Stagger" },
  { key: "easing", label: "Easing" },
  { key: "svg", label: "SVG Animation" },
  { key: "text", label: "Text Animation" },
  { key: "draggable", label: "Draggable" },
  { key: "motionpath", label: "Motion Path" },
];

function App() {
  const [selected, setSelected] = useState(demos[0].key);

  const renderDemo = () => {
    switch (selected) {
      case "basic":
        return <BasicAnimation />;
      default:
        return (
          <div className="demo-placeholder">
            This demo is coming soon! Select a demo from the menu to view it
            here.
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>GSAP Demos</h2>
        <ul>
          {demos.map((demo) => (
            <li
              key={demo.key}
              className={selected === demo.key ? "active" : ""}
              onClick={() => setSelected(demo.key)}
            >
              {demo.label}
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <h1>{demos.find((d) => d.key === selected)?.label}</h1>
        {renderDemo()}
      </main>
    </div>
  );
}

export default App;
