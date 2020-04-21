import React, { Component } from "react";

const BagTotal = ({ totalBagCost }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Bag Total:
          <span className="badge badge-pill badge-secondary">
            {totalBagCost}
          </span>
        </span>
      </nav>
    </div>
  );
};

export default BagTotal;
