import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import gitHubImg from "../assets/images/github.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

function NavBar() {
  const [activatedLink, setactivatedLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setactivatedLink(link);
  };

  let href =
    "https://drive.google.com/file/d/1KjHwplm_2qR1Lu6L-lvpGPItqo0QhNwH/view";

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" /> */}
          <span className="logo_section" style={{ color: "#fff" }}>
            <h1>DSK</h1>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activatedLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            {/* <Nav.Link
              href="#skills"
              className={
                activatedLink === "skills"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link> */}
            <Nav.Link
              href="#projects"
              className={
                activatedLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/Deepsk315">
                <img src={gitHubImg} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/deepak-sarkar-5b728b170/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              {/* <a href="#">
                <img src={navIcon3} alt="facebook" />
              </a> */}
            </div>
            <button className="vvd" style={{ borderRadius: 10 }}>
              <a
                href={href}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: 20,
                }}
                target="_blank"
              >
                Resume
              </a>
            </button>
            <button
              className="vvd"
              style={{ borderRadius: 10 }}
              onClick={() => onUpdateActiveLink("connect")}
            >
              <a href="#connect" style={{ textDecoration: "none" }}>
                <span style={{ color: "#fff" }}>Let's Connect</span>
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
