import Navbar from '../Navbar';
import Footer from '../Footer';
import { useState } from 'react';

export default function Layout(props) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div id="scoll" className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle}/>
        {props.children}
        <Footer />
    </div>
  )
}
