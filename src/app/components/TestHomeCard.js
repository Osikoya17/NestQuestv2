import { bestSellingHomes } from "../data";

import React from "react";

const TestHomeCard = () => {
  return (
    <div>
      {bestSellingHomes.map((home) => (
        <div key={home.id} className=""></div>
      ))}
    </div>
  );
};

export default TestHomeCard;
