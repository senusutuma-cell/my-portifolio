
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;