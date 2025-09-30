"use client";
import React, { useState } from "react";

interface StarRatingInputProps {
  initialRating: number;
  maxStars?: number;
  onChange: (rating: number) => void;
}

const StarIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    className={`w-6 h-6 transition-colors duration-150 ${isActive ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarRatingInput: React.FC<StarRatingInputProps> = ({ initialRating, maxStars = 5, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleClick = (rating: number) => {
    setCurrentRating(rating);
    onChange(rating);
  };

  return (
    <div className="flex justify-center space-x-1" onMouseLeave={() => setHoverRating(0)}>
      {Array.from({ length: maxStars }, (_, index) => {
        const ratingValue = index + 1;
        const isActive = ratingValue <= (hoverRating || currentRating);
        return (
          <button
            key={index}
            type="button"
            className="focus:outline-none"
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => setHoverRating(ratingValue)}
            aria-label={`별점 ${ratingValue}`}
          >
            <StarIcon isActive={isActive} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;
