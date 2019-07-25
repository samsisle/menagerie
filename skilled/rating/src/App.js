import React, { useState } from 'react';

import { stars } from './lib/stars';

import './css/App.css';

export default function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = id => () => {
    setRating(id);
    setHover(0);
  };
  const handleReset = () => setRating(0);
  const handleMouseEnter = id => () => setHover(id);
  const handleMouseLeave = () => setHover(0);

  return (
    <div className="App">
      <div className="stars">
        {stars.map(star => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={
              hover >= star.id
                ? '#1da1f2'
                : rating >= star.id
                ? '#51bb7b'
                : '#808080'
            }
            stroke={
              hover >= star.id
                ? '#1da1f2'
                : rating >= star.id
                ? '#51bb7b'
                : '#808080'
            }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleRating(star.id)}
            onMouseEnter={handleMouseEnter(star.id)}
            onMouseLeave={handleMouseLeave}
            key={star.id}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
