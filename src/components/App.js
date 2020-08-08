import React from "react";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "red",
  padding: "10px",
};

const App = () => {
  return (
    <div>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>Open Modal</button>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </div>
  );
};

export default App;
