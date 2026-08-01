import React from "react";

function Interests() {
  const interests = ["Music 🎵", "Driving 🚗", "Coding/Gaming 🎮", "Exploring Food 🍲"];

  return (
    <section id="interests" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Interests</h2>
      <div className="flex justify-center space-x-6">
        {interests.map((interest, index) => (
          <span key={index} className="px-4 py-2 bg-gray-700 rounded-lg shadow-md">
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Interests;
