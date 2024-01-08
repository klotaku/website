import "../../assets/css/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content-container">
          <p className="greeting">Hello! My name is</p>
          <h1 className="name">Chloe Zhu</h1>
          <h2 className="hero-sentence">I believe in using culture to make a difference.</h2>

          <p className="desc">
            I'm a first-year student at Princeton University who is interested in
            using the intersection of economics, public policy, and technology to benefit humanity. 
            I love learning new languages, playing golf, and exploring diverse cuisines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
