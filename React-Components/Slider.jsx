"use client";
import React, { useState, useEffect } from "react";

function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    // SLIDES CONTAINER STARTS HERE
    <div className="w-full flex relative overflow-hidden">
      {data.map((card) => (
        // SLIDE BOX STARTS HERE
        <div
          key={card.customerName}
          style={{ translate: `${-100 * currentIndex}%` }}
          class="w-full flex flex-col justify-center items-center gap-2 flex-grow-0 flex-shrink-0 transition-all duration-700 ease-in-out"
        >
          {/* PUT SLIDE ITEM HERE */}
        </div>
        // SLIDE BOX ENDS HERE
      ))}
    </div>
    // SLIDES CONTAINER ENDS HERE
  );
}

export default Slider;
