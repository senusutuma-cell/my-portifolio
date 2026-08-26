import { useState } from 'react';
import personalForm

function App() {
  const [cv, setCV] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: ""
    },
    education: [],
    experience: [],
    skills: []
  });

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <pre>{JSON.stringify(cv, null, 2)}</pre>
    </div>
  );
}

export default App;