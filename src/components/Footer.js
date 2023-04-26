import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import gitHubImg from "../assets/images/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{ paddingTop: 50 }}>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 style={{ fontSize: "60px" }}>DSK</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ marginBottom: 15 }}>
              <a href="https://www.linkedin.com/in/deepak-sarkar-5b728b170/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Deepsk315">
                <img src={gitHubImg} alt="Github" />
              </a>
              <a href="https://www.facebook.com/DeepSk3697/">
                <img src={navIcon3} alt="Facebook" />
              </a>
            </div>
            <h6>Copyright 2022. All Rights Reserved</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
