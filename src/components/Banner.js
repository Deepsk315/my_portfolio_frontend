import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeteleted] = useState(false);
  const toRotate = ["Web Developer", "Full Stack Developer", "Web3 Developer"];
  const [activatedLink, setactivatedLink] = useState("home");
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeteleted(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeteleted(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const onUpdateActiveLink = (link) => {
    setactivatedLink(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline" style={{ borderRadius: 10 }}>
              Welcome to my Portfolio
            </span>
            <h1>
              {`Hey I'm Deepak Sarkar`}
              <span className="wrap"> {text}</span>
            </h1>
            <p>
              I'm a Full-Stack Developer specialised in Frontend and Backend
              development for web applications. Having an experience over 1 year
              with creating decentralised applcations with the use of Web3 and
              BlockChain.Want to know how I may help your project? Please Check
              out my projects and resume.{" "}
            </p>
            <a href="#connect" style={{ textDecoration: "none" }}>
              <button onClick={() => onUpdateActiveLink("connect")}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
