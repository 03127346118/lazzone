import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
        {SlideOneData.map(
          ({ backgroundImage, title, text, button, url }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg={{ span: "6", offset: "6" }}>
                    <div
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "60%",
                        right: "-20px",
                        backgroundColor: "white",
                        opacity: "0.8",
                      }}
                    ></div>
                    <p className="main-slider__subtext">
                      <span className="subtitle_number">{index + 1}</span>{" "}
                      {text}
                    </p>
                    <p style={{fontSize:"1.5rem"}} className="main-slider__title"><b>{title}</b></p>
                    <div
                      className="slide_button"
                      style={{ textAlign: "right" }}
                    >
                      <Link href={url} className="btn-yellow">
                        {button}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default SliderOne;
