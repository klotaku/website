import "../../assets/css/experience.css";
import SectionHeader from "../section-header";
import Chevron from "../../assets/icons/chevron.svg";
import Stack from "../../assets/icons/stack.svg";

import SoftwareEngineer from "../../assets/icons/software-engineer.svg";
import MLIntern from "../../assets/icons/ml-intern.svg";
import DevIntern from "../../assets/icons/dev-intern.svg";
import BoardMember from "../../assets/icons/board-member.svg";

function ExperienceCard(props) {
  return (
    <div
      className="experience-card"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="experience-img">
        <img src={props.img} alt="Icon" />
      </div>
      <div className="experience-text">
        <h3 className="experience-title">{props.title}</h3>
        <p className="experience-company">{props.company}</p>
        <p className="experience-date">{props.date}</p>

        {props.pts.map((pt) => (
          <div className="experience-pt">
            <img className="chevron" src={Chevron} alt="Chevron" />
            <p>{pt}</p>
          </div>
        ))}

        
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      title: "French Language Translator",
      company: "PU Language Project, Princeton University",
      date: "Sep 2023 - Present",
      img: SoftwareEngineer,
      pts: [
        "Actively involved as a French language translator, emphasizing a thorough and professional understanding of material and idiomatic expression.",
      ],
    },
    {
      title: "Copy Editor & Writer",
      company: "The Daily Princetonian, Princeton University",
      date: "Sep 2023 - Present",
      img: MLIntern,
      pts: [
        "Collaborate with a diverse team of writers and editors.",
      ],
    },
    {
      title: "Event Coordinator & Barista",
      company: "The PU Coffee Club, Princeton University",
      date: "Sep 2023 - Present",
      img: DevIntern,
      pts: [
        "Organize and coordinate events for the PU Coffee Club.",
        "Employ customer service in a fast-paced working environment.",
      ],
    },
    {
      title: "Young Alumni Fundraising Class Agent / Student Alumni Relations Council & Social Media Coordinator",
      company: "The Office of Institutional Advancement, Phillips Exeter Academy",
      date: "Jun 2023 - Present / Sep 2021 - Jun 2023",
      img: BoardMember,
      pts: [
        "Engaged with alumni volunteers and leaders to serve as liaison in the Exeter community.",
        "Created and managed content for the STARs social media presence.",
        "Organize initiatives for fundraising from young alumni in recent graduating classes.",
      ],
    },
    {
      title: "National Youth Ambassador",
      company: "French for the Future",
      date: "Jun 2021 - Aug 2022",
      img: BoardMember,
      pts: [
        "Youth ambassador for one of the largest bilingual education NGOs in Canada.",
        "Organized meaningful initiatives and activities for the promotion of the French language and official bilingualism in schools and communities throughout the school year.",
        "Wrote for the FFF online blog: http://bit.ly/3SgVX40 and https://bit.ly/3tNwBRb.",
        "Created French-language educational content for online French tutors.",
      ],
    },
    {
      title: "Summer Research Intern",
      company: "Starling Lab for Data Integrity, Stanford University",
      date: "8 weeks, Summer 2022",
      img: BoardMember,
      pts: [
        "Conducted research on media data integrity with a group of students.",
        "Compiled results into a https://theinformaticists.com/2022/10/02/designing-for-authenticity/.",
      ],
    },
    {
      title: "Classical Archaeology Apprentice",
      company: "Gabii Field Program, Rome, Italy",
      date: "3 weeks, Summer 2022",
      img: BoardMember,
      pts: [
        "Worked at the archaeological site of Gabii to experience all aspects of field archaeology (finds, environmental, topography, excavation/SUs).",
        "Learned about the importance of cultural preservation and its role in the study of history.",
      ],
    },
  ];

  return (
    <div className="experience">
      <SectionHeader
        title="Experience"
        aos="fade-right"
        offset="20px"
        duration="1000"
      />

      <div className="container">
        {experiences.map(({ title, company, date, img, pts, stack }) => (
          <ExperienceCard
            title={title}
            company={company}
            date={date}
            img={img}
            pts={pts}
            stack={stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
