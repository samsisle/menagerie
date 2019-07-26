import React, { useState } from 'react';

import { stars } from '../lib/stars';

import '../css/Stars.css';

export default function Stars() {
  const [rating, setRating] = useState(Number(window.localStorage.getItem('rating') || 0));
  const [hover, setHover] = useState(0);

  function handleRating(id) {
    return () => {
      setRating(id);
      window.localStorage.setItem('rating', id);
      setHover(0);
    };
  }
  function handleReset() {
    setRating(0);
    window.localStorage.setItem('rating', 0);
  }
  function handleMouseEnter(id) {
    return () => {
      setRating(0);
      setHover(id);
    };
  }
  function handleMouseLeave() {
    setRating(Number(window.localStorage.getItem('rating')));
    setHover(0);
  }

  return (
    <>
      <div className="stars">
        {stars.map(star => (
          <div className="star" key={star.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              onClick={handleRating(star.left)}
              onMouseEnter={handleMouseEnter(star.left)}
              onMouseLeave={handleMouseLeave}
            >
              <polygon
                fill={hover >= star.left ? '#1da1f2' : rating >= star.left ? '#51bb7b' : '#808080'}
                stroke={
                  hover >= star.left ? '#1da1f2' : rating >= star.left ? '#51bb7b' : '#808080'
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="12 0 12 24"
              onClick={handleRating(star.right)}
              onMouseEnter={handleMouseEnter(star.right)}
              onMouseLeave={handleMouseLeave}
            >
              <polygon
                fill={
                  hover >= star.right ? '#1da1f2' : rating >= star.right ? '#51bb7b' : '#808080'
                }
                stroke={
                  hover >= star.right ? '#1da1f2' : rating >= star.right ? '#51bb7b' : '#808080'
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77"
              />
            </svg>
          </div>
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset Rating
      </button>
    </>
  );
}
