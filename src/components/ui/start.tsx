import React from "react";
import { Star } from "lucide-react";

interface value {
  rate: number;
}

const Start = ({ rate }: value) => {
  const fullStars = Math.floor(rate);
  const semiStars = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (semiStars ? 1 : 0);

  const fullStarArray = Array(fullStars).fill(0);
  const emptyStarArray = Array(emptyStars).fill(0);

  return (
    <div className="flex">
      {fullStarArray.map((_, index) => (
        <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {emptyStarArray.map((_, index) => (
        <Star key={index} className="w-5 h-5 fill-yellow-200 text-yellow-400" />
      ))}
    </div>
  );
};

export default Start;
