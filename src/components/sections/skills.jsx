import "../../assets/css/skills.css";
import SectionHeader from "../section-header";

import MobileDev from "../../assets/icons/mobile-dev.svg";
import AI from "../../assets/icons/ai.svg";
import WebDev from "../../assets/icons/web-dev.svg";

function Skill(props) {
  return (
    <div className="skill" data-aos="fade-up" data-aos-duration="1000">
      <div className="skill-icon">
        <img className="icon" src={props.src} alt="icon" />
      </div>
      <h3 className="skill-name">{props.skill}</h3>
    </div>
  );
}

function SkillBar(props) {
  return (
    <div className="skillbar" data-aos="fade-left" data-aos-duration="1000">
      <div className="skillbar-name">
        <h4>{props.name}</h4>
      </div>
      <div className="skillbar-bar">
        <p className="skillbar-lang">{props.desc}</p>
      </div>
    </div>
  );
}

function Skills() {
  const langs = [
    {
      name: "Languages",
      desc: "French (bilingual, DALF C1 certified), Japanese & Mandarin (intermediate), Latin & Greek (intermediate).",
    },
    {
      name: "Computer Skills & Programming Languages",
      desc: "Word, Excel, PowerPoint. Java, Python, JavaScript, HTML, CSS.",
    },
    {
      name: "Other",
      desc: "Written/Oral Communication, Content Creation & Management, Event Planning, Fundraising.",
    },
  ];

  return (
    <div id="skills">
      <SectionHeader
        title="Skills"
        aos="fade-up"
        offset="20px"
        duration="1000"
      />

      <div className="container">
        {/* <div className="skills-container">
          <Skill skill="Machine Learning & Artifical Intelligence" src={AI} />
          <Skill skill="Full-Stack Web Programming" src={WebDev} />
          <Skill
            skill="Cross-Platform Mobile App Development"
            src={MobileDev}
          />
        </div> */}

        <div className="skillbar-container">
          <div className="skillbar-col">
            {langs.slice(0, 3).map(({ name, desc }) => {
              return <SkillBar name={name} desc={desc} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
