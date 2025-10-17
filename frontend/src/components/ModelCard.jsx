import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
      <p className="text-sm mb-2">{model.description}</p>
      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{model.tag}</span>
    </div>
  );
};

export default ModelCard;
