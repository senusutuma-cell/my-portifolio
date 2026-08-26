// src/App.jsx
import React, { useState } from 'react';
import { exampleData, emptyData } from './data/exampleData';
import FormPanel from './components/FormPanel';
import CVPreview from './components/CVPreview';
import Actions from './components/Actions';
import './App.css';

export default function App() {
  const [cvData, setCvData] = useState(exampleData);
  const [isPreviewOnly, setIsPreviewOnly] = useState(false);

  // 1. Update Personal Info
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  // 2. Generic helper for array items (Education & Experience)
  const handleArrayChange = (section, id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleAddItem = (section, newItem) => {
    setCvData((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...newItem, id: crypto.randomUUID() }],
    }));
  };

  const handleRemoveItem = (section, id) => {
    setCvData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  // 3. Skills handling
  const handleAddSkill = (skill) => {
    if (!skill.trim() || cvData.skills.includes(skill.trim())) return;
    setCvData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill.trim()],
    }));
  };

  const handleRemoveSkill = (skillToRemove) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  // 4. Action Buttons
  const handleClearAll = () => setCvData(emptyData);
  const handleLoadExample = () => setCvData(exampleData);
  const handlePrint = () => window.print();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎓 Dynamic CV Builder</h1>
        <Actions
          onClear={handleClearAll}
          onLoadExample={handleLoadExample}
          onToggleMode={() => setIsPreviewOnly(!isPreviewOnly)}
          isPreviewOnly={isPreviewOnly}
          onPrint={handlePrint}
        />
      </header>

      <main className={`main-content ${isPreviewOnly ? 'preview-mode' : ''}`}>
        {!isPreviewOnly && (
          <FormPanel
            data={cvData}
            onPersonalChange={handlePersonalInfoChange}
            onArrayChange={handleArrayChange}
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
            onAddSkill={handleAddSkill}
            onRemoveSkill={handleRemoveSkill}
          />
        )}
        <CVPreview data={cvData} />
      </main>
    </div>
  );
}