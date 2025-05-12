import React from 'react';
import { useParams } from 'react-router-dom';

const ShareEvent = () => {
  const { id } = useParams();
  const shareLink = `${window.location.origin}/event/${id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Event link copied to clipboard 📋');
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-yellow-200 to-pink-300 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-center">
        <h2 className="text-xl font-bold text-pink-600">Share This Event</h2>
        <input
          readOnly
          value={shareLink}
          className="w-full border px-4 py-2 rounded text-gray-700"
        />
        <button
          onClick={handleCopy}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShareEvent;
