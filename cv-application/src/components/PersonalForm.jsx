function PersonalForm({ personal, onUpdate }) {
  return (
    <div className="personal-form">
      <h2>Personal Info</h2>
      <input value={personal.name} onChange={(e) => onUpdate("name", e.target.value)} placeholder="Full Name" />
      <input value={personal.email} onChange={(e) => onUpdate("email", e.target.value)} placeholder="Email" />
      <input value={personal.phone} onChange={(e) => onUpdate("phone", e.target.value)} placeholder="Phone" />
      <input value={personal.location} onChange={(e) => onUpdate("location", e.target.value)} placeholder="Location" />
      <input value={personal.linkedin} onChange={(e) => onUpdate("linkedin", e.target.value)} placeholder="LinkedIn" />
      <input value={personal.github} onChange={(e) => onUpdate("github", e.target.value)} placeholder="GitHub" />
    </div>
  );
}

export default PersonalForm;