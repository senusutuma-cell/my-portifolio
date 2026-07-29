
function Hero({ info }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">hi,i'm</p>
        <h1 className="hero-name">{info.name}</h1>
        <h2 className="hero-title">{info.title}</h2>
        <p className="hero-bio">{info.bio}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;