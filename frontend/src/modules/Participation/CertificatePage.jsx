import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const CertificatePage = ({ name = "Thulasi K.", eventName = "Beach Cleanup", date = "May 10, 2025" }) => {
  const certificateRef = useRef();

  const handleDownload = () => {
    const element = certificateRef.current;
    const opt = {
      margin:       0.5,
      filename:     `${name.replace(" ", "_")}_Certificate.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div ref={certificateRef} className="bg-white border-4 border-indigo-500 p-10 w-full max-w-3xl text-center shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Certificate of Participation</h1>
        <p className="text-lg mb-4">
          This is to certify that <span className="font-semibold text-indigo-600">{name}</span>
        </p>
        <p className="text-lg mb-4">
          has successfully participated in the event <span className="font-semibold text-indigo-600">"{eventName}"</span>
        </p>
        <p className="text-lg mb-4">
          held on <span className="font-semibold text-indigo-600">{date}</span>.
        </p>
        <p className="mt-10 text-sm text-gray-500">Smart Local Volunteer Network</p>
        <div className="mt-10 text-right pr-10">
          <p className="text-sm">_____________________</p>
          <p className="text-sm">Authorized Signature</p>
        </div>
      </div>

      <button 
        onClick={handleDownload}
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificatePage;
