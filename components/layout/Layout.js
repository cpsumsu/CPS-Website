import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout(props) {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('theme-is-dark'));
    if (isDark === undefined || isDark === null) {
      setDarkMode(false);
      return;
    }

    setDarkMode(isDark);
  }, [])

  useEffect(() => {
    if (darkMode === null) return;
    localStorage.setItem('theme-is-dark', JSON.stringify(darkMode));
  }, [darkMode]);
  
  const handleThemeToggle = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div className={`h-screen ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle}/>
        {props.children}
        <Footer />
    </div>
  )
}
