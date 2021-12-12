import { FeatureOneData } from "@/data";
import React from "react";
var mySet = 6;

const FeatureOne = () => {
  return (
    <div className="feature_service_area text-center">
      {FeatureOneData.map(({ icon, title }, index) => (
        <div className="feature_service_box_width" key={`feature-one-${index}`}>
          <i className={icon}></i>
          <i ><h3 style={{backgroundColor:"yellow",borderColor:"yellow",borderRadius:"50%",width:"25px",height:"25px",color:"black",display:'inline-block',textAlign:"center"}}>{mySet=mySet-1}</h3></i>
          
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureOne;
