import React, { useState } from "react";
import { models } from "../data/models";
import ModelCard from "../components/ModelCard";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-60">
          <h2 className="text-lg font-semibold p-4">Sidebar</h2>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">AI Model Hub</h1>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
