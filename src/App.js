import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/components/NavBar";
import Banner from "../src/components/Banner";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
