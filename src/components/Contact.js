import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../assets/images/contact-img.svg";
import { ToastContainer } from "react-toastify";
import { toastAlert } from "./ToastAlert";
import config from "../config";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttontext, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [buttonEnable, setButtonEnable] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    // console.log(formDetails);
    e.preventDefault();

    if (
      formDetails.email == "" ||
      formDetails.firstName == "" ||
      formDetails.lastName == "" ||
      formDetails.message == ""
    ) {
      toastAlert("error", "Please Fill the Empty Fields", "error");
    } else {
      setButtonText("Sending...");
      let url = config.backend_url;
      // if (config.env == "prod") {
      //   url = "https://myportfolio3697.herokuapp.com/contact";
      // } else {
      //   url = "http://localhost:5000/contact";
      // }
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        toastAlert("success", "Message sent successfully", "success");
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        toastAlert(
          "error",
          "Something went wrong , please try again later.",
          "error"
        );
        setStatus({
          success: false,
          message: "Something went wrong , please try again later.",
        });
      }
    }
  };

  return (
    <section className="contact" id="connect">
      <ToastContainer />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ContactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                {/* <Col sm={6} className="px-1">
                  <input
                    type="number"
                    value={formDetails.phone}
                    placeholder="Phone"
                    maxLength={10}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col> */}
                <Col sm={12} className="px-1">
                  <textarea
                    type="text"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <button type="submit" style={{ borderRadius: 8 }}>
                    <span>{buttontext}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
