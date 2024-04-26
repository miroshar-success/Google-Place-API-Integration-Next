"use client";
import React from "react";
import useQuantityCounter from "@/hooks/useQuantityCounter";

function QuantityCounter({dcrIcon="bi bi-chevron-down", incIcon="bi bi-chevron-up"}) {
  const { quantity, increment, decrement, handleInputChange } =
    useQuantityCounter(1);

  return (
    <div className="quantity-counter">
      <a
        className="quantity__minus"
        style={{ cursor: "pointer" }}
        onClick={decrement}
      >
        <i className={dcrIcon} />
      </a>
      <input
        name="quantity"
        type="text"
        className="quantity__input"
        value={quantity}
        onChange={handleInputChange}
      />
      <a
        className="quantity__plus"
        style={{ cursor: "pointer" }}
        onClick={increment}
      >
        <i className={incIcon} />
      </a>
    </div>
  );
}

export default QuantityCounter;
