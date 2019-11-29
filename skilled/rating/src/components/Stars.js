import React, { useState } from "react";

import "../css/Stars.css";

const stars = [
  { id: 1, left: 0.5, right: 1 },
  { id: 2, left: 1.5, right: 2 },
  { id: 3, left: 2.5, right: 3 },
  { id: 4, left: 3.5, right: 4 },
  { id: 5, left: 4.5, right: 5 }
];

export default function Stars() {
  const [rating, setRating] = useState(
    Number(window.localStorage.getItem("rating") || 0)
  );
  const [hover, setHover] = useState(0);

  function handleRating(n) {
    return () => {
      setRating(n);
      window.localStorage.setItem("rating", n);
      setHover(0);
    };
  }

  function handleMouseEnter(n) {
    return () => {
      setRating(0);
      setHover(n);
    };
  }

  function handleMouseLeave() {
    setRating(Number(window.localStorage.getItem("rating")));
    setHover(0);
  }

  function handleColor(n) {
    if (hover >= n) return "#1da1f2";
    else return rating >= n ? "#51bb7b" : "#808080";
  }

  function handleReset() {
    setRating(0);
    window.localStorage.setItem("rating", 0);
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
                fill={handleColor(star.left)}
                stroke={handleColor(star.left)}
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
                fill={handleColor(star.right)}
                stroke={handleColor(star.right)}
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
