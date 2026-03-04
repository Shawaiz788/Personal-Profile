import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">My Portfolio</h1>
          <ul className="nav-menu">
            <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
            <li><button onClick={() => setCurrentPage('about')}>About</button></li>
            <li><button onClick={() => setCurrentPage('projects')}>Projects</button></li>
            <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
