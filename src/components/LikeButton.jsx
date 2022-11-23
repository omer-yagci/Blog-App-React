import React, { useState } from "react";

export default function LikeButton() {
  const [isClick, setClick] = useState(false);
  return (
    <div>
      <h5
        className="hover:cursor-pointer"
        onClick={() => setClick((prevClick) => !prevClick)}
      >
        {isClick ? "❤" : "🤍"}
      </h5>
    </div>
  );
}
