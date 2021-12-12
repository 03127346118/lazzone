import { FeatureOneData } from "@/data";
import React from "react";
var mySet = 6;

const FeatureOne = () => {
  return (
    <div className="feature_service_area text-center">
      {FeatureOneData.map(({ icon, title }, index) => (
        <div className="feature_service_box_width" key={`feature-one-${index}`}>
          <i>{mySet=mySet-1}</i>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureOne;
