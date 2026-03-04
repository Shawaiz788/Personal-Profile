const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json({
    message: 'Welcome to my portfolio API',
    projects: [
      {
        id: 1,
        title: 'Project 1',
        description: 'Your project description here',
        technologies: ['React', 'Node.js']
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Your project description here',
        technologies: ['React', 'MongoDB']
      }
    ]
  });
});

app.get('/api/about', (req, res) => {
  res.json({
    name: 'Your Name',
    title: 'Web Developer',
    bio: 'Welcome to my portfolio! I am a passionate full-stack developer.'
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    email: 'your.email@example.com',
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile'
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received!' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
