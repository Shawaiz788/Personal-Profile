
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');

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


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  // Email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // send to yourself
    subject: `Portfolio Contact Form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
