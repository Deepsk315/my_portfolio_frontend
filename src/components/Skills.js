import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/images/color-sharp.png";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2 style={{ paddingBottom: 15 }}>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                ssr={true}
              >
                <div className="item">
                  <h5>WEB DEV </h5>
                </div>
                <div className="item">
                  <h5>WEB3</h5>
                </div>
                <div className="item">
                  <h5>FULL STACK </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
