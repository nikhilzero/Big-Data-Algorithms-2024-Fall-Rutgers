import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import data from './questions.json';

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const personalityTestQuestions = data.personalityTestQuestions;

  // Add a check to handle if questions are not loaded yet or if the data is empty
  if (!personalityTestQuestions || personalityTestQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < personalityTestQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setRating(0); // Reset rating for next question
    }
  };

  const handleSubmit = () => {
    navigate('/chart'); // Redirect to the chart page
  };

  return (
    <div className="questionContainer">
      <h2 id='question'>{personalityTestQuestions[currentQuestionIndex].question}</h2>
      <div className="ratingContainer">
        <br />
        <input
          id='ratingInput'
          type="range"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <span id="ratingValue">{rating}</span>
      </div>
      {currentQuestionIndex === personalityTestQuestions.length - 1 ? (
        <button type='submit' className='btn' onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <button className='btn' onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Question;
