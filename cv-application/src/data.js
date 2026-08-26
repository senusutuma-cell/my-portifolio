
export const exampleData = {
  personalInfo: {
    fullName: "Sena Sutuma",
    email: "Senusutuma@gmail.com",
    phone: "+25944001011",
    location: "Sheger city,Alemgena",
    linkedIn: "linkedin.com/in/senasutuma",
    github: "github.com/senusutuma-cell"
  },
  education: [
    {
      id: "edu-1",
      school: "jimma university, jimma",
      degree: "B.S.",
      field: "Software Engineering",
      startDate: "2017",
      endDate: "2022"
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "TechCorp Solutions",
      position: "Frontend Engineer",
      startDate: "2022",
      endDate: "Present",
      description: "Architected modern React applications, improved web performance by 35%, and mentored junior engineers."
    }
  ],
  skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Git/GitHub", "REST APIs"]
};

export const emptyData = {
  personalInfo: { fullName: "", email: "", phone: "", location: "", linkedIn: "", github: "" },
  education: [],
  experience: [],
  skills: []
};