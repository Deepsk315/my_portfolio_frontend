import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img4.png";
import projImg2 from "../assets/images/project-img5.png";
import projImg3 from "../assets/images/project-img6.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "DSK Store",
      projTitle: "MINI E-COMM APPLICATION",
      imgUrl: projImg1,
      link: "https://dskstoreapp.herokuapp.com/",
      description:
        "A Mini E-Comm Responsive Application in which user can buy their liking product with PayPal as payment method integration. It also has a Admin Panel where Admin's can view users and their orders, also can add and remove products from the list. The Project is hosted with Heroku.  ",
      techStack: "ReactJs, MongoDB, NodeJs, JavaScript ",
    },
    {
      title: "Pikaso",
      projTitle: "NFT MARKET",
      imgUrl: projImg2,
      link: "https://pikaso.market/",
      description:
        "NFT Market Responsive Decentralised Application in which User can Buy/Sell/Bid the NFT's with the help of Web3 Wallets such as MetaMask , WalletConnect available for Ethereum and Polygon Networks.",
      techStack: "ReactJs, MongoDB, NodeJs, JavaScript, Blockchain  ",
    },
    {
      title: "Staking",
      projTitle: "DECENTRALISED TOKEN STAKING",
      imgUrl: projImg3,
      link: "https://staking.medifakt.com/",
      description:
        "Decentralised Token Staking Application which is used for adding liquiduity to the token with a % return in a year as rewards. The Staking button enables when you have atleast 10 FAKT Token with gas fees in Ethereum.",
      techStack: "Javascript, ReactJs, BlockChain ",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ paddingBottom: 100 }}>Projects</h2>
                  <Col>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Col>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
