import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 

const FeedbackPage = () => {
  const { eventId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    alert(`Feedback submitted for event ${eventId}: \nRating: ${rating} \nComment: ${comment}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Give Feedback for Event {eventId}</h2>

      <div className="rating mb-6 flex justify-center space-x-2">
        <p className="text-lg">Rate the event:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Leave a comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackPage;
