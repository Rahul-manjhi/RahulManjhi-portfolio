import React from "react";

function Experience() {
  return (
    <section id="experience" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Technical Support Executive</h3>
        <p className="italic">Entab Infotech Pvt. Ltd., New Delhi (Nov 2023 – May 2026)</p>
        <ul className="list-disc ml-6 mt-3">
          <li>ERP Module In-Charge, trained internal teams on system usage.</li>
          <li>Diagnosed and resolved customer-reported issues.</li>
          <li>Prepared and managed ERP usage reports.</li>
          <li>Collaborated with cross-functional teams to streamline workflows.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
