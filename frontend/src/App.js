import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import { FiSun, FiMoon } from 'react-icons/fi';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <InteractiveBackground theme={theme} />
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <span className="logo-dot"></span>
            Shawaiz Ali
          </div>
          <div className="nav-right-group">
            <ul className="nav-menu">
              <li>
                <button
                  className={currentPage === 'home' ? 'active' : ''}
                  onClick={() => setCurrentPage('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={currentPage === 'projects' ? 'active' : ''}
                  onClick={() => setCurrentPage('projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={currentPage === 'about' ? 'active' : ''}
                  onClick={() => setCurrentPage('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={currentPage === 'contact' ? 'active' : ''}
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2026 Shawaiz Ali Rehman. Built with React & 3D Interactive Design.</p>
      </footer>
    </div>
  );
}

export default App;
