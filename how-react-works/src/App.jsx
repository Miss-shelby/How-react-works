import { useState } from "react";

// Content array containing summaries and details
const content = [
  {
    summary: "React is a library for building UIs",
    details: "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

// Main component of the app
export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

// Tabbed component to handle tabs and display content
function Tabbed({ content }) {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Rendering tab buttons */}
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {/* Displaying content based on the active tab */}
      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

// Tab component to render individual tab button
function Tab({ num, activeTab, onClick }) {
  return (
    <button
      // Conditional class to highlight the active tab
      className={activeTab === num ? "tab active" : "tab"}
      // When clicked, it sets the active tab number
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

// TabContent component to display the content of a tab
function TabContent({ item }) {
  // State to show or hide details
  const [showDetails, setShowDetails] = useState(true);
  // State to keep track of likes
  const [likes, setLikes] = useState(0);

  // Function to increase likes
  function handleInc() {
    setLikes(likes + 1);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}
      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
}

// DifferentContent component for a special tab case
function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
