
import { GalleryOneData } from "@/data";
import React from "react";
import GalleryCard from "@/components/gallery-card";

const GalleryOne = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-section-title text-center">
              <h1>التخصصات الطبية </h1>
              <p>
                تتيح ألمانيا للمرضى الذين يأتون إلى العلاج برنامجا كاملا من
                الخبرات الطبية في جميع التخصصات. يوجد في ألمانيا أطباء متخصصين
                في الأقسام الرئيسية، مما يتيح للمرضى الذين يعانون من مرض نادر أو
                معقد فرص عالية في العلاج بدقة بالغة
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="gallery_area">
        {GalleryOneData.map(({ title, image, url }, index) => (
          <GalleryCard
            key={`gallery-one-${index}`}
            src={image}
            alt=""
            title={title}
            url={url}
          />
        ))}
      </section>
    </>
  );
};

export default GalleryOne;
