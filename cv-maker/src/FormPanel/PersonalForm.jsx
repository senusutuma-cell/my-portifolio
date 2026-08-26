 // src/components/FormPanel/PersonalForm.jsx
import React from 'react';

export default function PersonalForm({ info, onChange }) {
  return (
    <section className="form-section">
      <h2>Personal Details</h2>
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={info.fullName}
          onChange={onChange}
          placeholder="John Doe"
        />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={onChange}
          placeholder="john@example.com"
        />
      </div>
      <div className="input-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={info.phone}
          onChange={onChange}
          placeholder="+1 234 567 890"
        />
      </div>
      <div className="input-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={info.location}
          onChange={onChange}
          placeholder="City, Country"
        />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>LinkedIn</label>
          <input
            type="text"
            name="linkedIn"
            value={info.linkedIn}
            onChange={onChange}
            placeholder="linkedin.com/in/username"
          />
        </div>
        <div className="input-group">
          <label>GitHub</label>
          <input
            type="text"
            name="github"
            value={info.github}
            onChange={onChange}
            placeholder="github.com/username"
          />
        </div>
      </div>
    </section>
  );
}