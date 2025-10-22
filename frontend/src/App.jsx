import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [showModels, setShowModels] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleExploreModels = () => {
    setShowModels(true);
  };

  return (
    <div className="App">
      <Navbar 
        onExploreModels={handleExploreModels} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <Home 
        showModels={showModels} 
        setShowModels={setShowModels}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
