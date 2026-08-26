
export const exampleData = {
  personalInfo: {
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 019-2834',
    location: 'San Francisco, CA',
    linkedIn: 'linkedin.com/in/alexmorgan',
    github: 'github.com/alexmorgan',
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2018',
      endDate: '2022',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Tech Solutions Inc.',
      role: 'Frontend Developer',
      startDate: '2022',
      endDate: 'Present',
      description: 'Built responsive web applications using React and Tailwind CSS. Improved page performance by 35%.',
    },
  ],
  skills: ['JavaScript', 'React', 'CSS/HTML', 'Git', 'Node.js', 'TypeScript'],
};

export const emptyData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    github: '',
  },
  education: [],
  experience: [],
  skills: [],
};