import { Container, Col, Row } from "react-bootstrap";

export const ProjectCard = ({
  title,
  projTitle,
  imgUrl,
  link,
  description,
  techStack,
}) => {
  return (
    // <Col size={12} sm={8} md={4}>
    <div className="proj-container">
      <div className="proj-imgbx">
        <a href={link} style={{ color: "#fff" }} target="_blank">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
          </div>
        </a>
      </div>
      <p style={{ fontWeight: 30 }}>
        <b>
          <i>
            <h3>{projTitle}</h3>
          </i>
        </b>{" "}
        <br />
        {description} <br /> <br />
        <h4>
          <b>Tech Stack : {techStack}</b>
        </h4>
      </p>
    </div>
    // </Col>
  );
};
