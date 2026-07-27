function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span className="skill-category">{skill.category}</span>
      <h3>{skill.name}</h3>
      <p>Level: {skill.level}</p>
    </div>
  );
}

export default SkillCard;