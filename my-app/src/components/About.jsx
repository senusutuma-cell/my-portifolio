
function About({ name, bio }) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
        I am <strong>{name}</strong>. {bio}
      </p>
    </section>
  );
}

export default About;