import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import UserDetails from './components/UserDetailPage'; 
import Toggle from './components/Toggle';

function App() {
  const [theme, setTheme] = useState('light');

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<UserCard />} />
        <Route path="/user/:id" element={<UserDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
