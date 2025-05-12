import React, { useState } from 'react';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-indigo-700">Event Feedback 💬</h2>
        <textarea
          className="w-full border border-gray-300 rounded-md p-4 focus:outline-indigo-500"
          rows={6}
          placeholder="Share your experience..."
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackPage;
