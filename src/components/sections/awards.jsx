import "../../assets/css/awards.css";
import SectionHeader from "../section-header";

function Award(props) {
  return (
    <div className="aos-award" data-aos="fade-left" data-aos-duration="600">
      <div className="award">
        <h3 className="award-title">{props.title}</h3>
        <p className="award-issuer">{props.issuer}</p>
        <p className="award-date">{props.date}</p>
        <p className="award-blurb">{props.blurb}</p>
      </div>
    </div>
  );
}

function Awards() {
  const awards = [
    {
      title: "SHF French Creative Writing Award",
      issuer: "National French Honor Society (Société Honoraire de Français)",
      date: "Apr 2022",
      blurb:
        "Article published in l'Élan, Vol. 49.",
    },
    {
      title: "Coolidge Senator Distinction",
      issuer: "Coolidge Presidential Foundation",
      date: "since 2022",
      blurb:
        "Selected to gain membership to the Coolidge Presidential Society.",
    },
    {
      title: "Harvard Pre-Collegiate Economics Challenge (HPEC)",
      issuer: "Harvard Undergraduate Economics Association",
      date: "Apr 2022 & Apr 2023",
      blurb:
        "2nd place team & 1st place team coach.",
    },
    {
      title: "Silver Key Award",
      issuer: "Scholastic Art and Writing Council",
      date: "Mar 2021",
      blurb:
        "2021 Scholastic Art and Writing Awards (International Region).",
    },
  ];
  return (
    <div className="awards">
      <SectionHeader
        title="Awards"
        aos="fade-left"
        offset="20px"
        duration="600"
      />

      <div className="container">
        <div className="award-row">
          {awards.slice(0, 2).map(({ title, issuer, date, blurb }) => (
            <Award title={title} issuer={issuer} date={date} blurb={blurb} />
          ))}
        </div>

        <div className="award-row">
          {awards.slice(2, 4).map(({ title, issuer, date, blurb }) => (
            <Award title={title} issuer={issuer} date={date} blurb={blurb} />
          ))}
        </div>

        <div className="award-row">
          {awards.slice(4, 6).map(({ title, issuer, date, blurb }) => (
            <Award title={title} issuer={issuer} date={date} blurb={blurb} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
