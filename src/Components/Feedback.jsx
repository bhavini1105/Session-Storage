import React, { useState, useEffect } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...feedbackList, { feedback, id: Date.now() }];
    localStorage.setItem('Feedback', JSON.stringify(updated));
    setFeedbackList(updated);
    setFeedback('');
  };


  const handleDelete = (id) => {
    const feedbackData = feedbackList.filter((item) => item.id !== id);
    setFeedbackList(feedbackData);
    localStorage.setItem('Student', JSON.stringify(feedbackData));
  };

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('Feedback')) || [];
    setFeedbackList(storedFeedback);
  }, []);

  return (
    <div className="container">
      <h3 className="text-center my-4">Student Feedback</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Enter feedback"
          value={feedback}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Submit Feedback
        </button>
      </form>

      <ul className="mt-4 list-group">
        {feedbackList.map((item, index) => (
          <li key={item.id} className="list-group-item">
            Feedback {index + 1} : {item.feedback} <br></br><button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger me-2"
                        >
                          Delete
                        </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback;
