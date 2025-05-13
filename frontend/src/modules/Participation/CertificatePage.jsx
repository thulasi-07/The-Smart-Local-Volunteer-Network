import React, { useState } from "react";
import axios from "axios";

const CertificatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    event: "",
  });

  const handleDownload = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/generate-certificate",
        formData,
        { responseType: "blob" } 
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${formData.name}-certificate.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log("Error generating certificate", error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold text-blue-600 mb-6 text-center">
          Download Your Certificate
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event name"
          className="w-full border px-4 py-2 mb-6 rounded"
          value={formData.event}
          onChange={(e) => setFormData({ ...formData, event: e.target.value })}
        />

        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded transition"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;
