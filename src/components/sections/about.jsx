import SectionHeader from "../section-header";
import Picture from "../../assets/images/picture.png";
import "../../assets/css/about.css";

function About() {
  return (
    <div className="about" data-aos="fade-up">
      <SectionHeader title="About" />
      <div className="container">
        <div className="about-text">
          <p>
            Hello! My name is <span>Chloe</span>. 
          </p>
          <p>
            [Coming soon.]
          </p>
        </div>
        <div className="picture-container">
          <img id="picture" src={Picture} alt="Chloe"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
