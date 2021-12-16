import { FeatureOneData } from "@/data";
import React from "react";
import {
  FaFileInvoice,
  FaPassport,
  FaHotel,
  FaEnvelopeOpenText,
  FaPlaneArrival,
} from "react-icons/fa";

var mySet = [FaFileInvoice, FaPassport, FaHotel, FaEnvelopeOpenText, FaPlaneArrival];
const showIcon=(icon) => {
   switch(icon){
    case "icon-wallet":
      return <FaEnvelopeOpenText />
      case "icon-diploma":
        return <FaPlaneArrival/>
        case "icon-handshake":
          return <FaPassport/>
          case "icon-clock":
            return <FaHotel/>
            case "icon-invoice":
              return <FaFileInvoice/>
  }
}
const FeatureOne = () => {
  return (
    <div className="feature_service_area text-center">
      {FeatureOneData.map(({ icon, title }, index) => (
        <div className="feature_service_box_width" key={`feature-one-${index}`}>
         <div style={{fontSize:"4rem",marginTop:"20px"}} >{showIcon(icon)}</div>
          <i>
            <h3
              style={{
                backgroundColor: "yellow",
                borderColor: "yellow",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                color: "black",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              {index + 1}
            </h3>
          </i>

          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureOne;
