
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
    name: 'Shawaiz Ali Rehman',
    title: 'Computer Science Student',
    location: 'Lahore, Punjab',
    status: 'Open to full-time roles, internships, and freelance work',
    bio: 'Computer Science undergraduate at FAST-NUCES with a strong academic record and hands-on experience in software development and teaching. Skilled in C/C++, Python, SQL, and modern web technologies including React and Node.js. Experienced in building web, console, and systems-oriented projects such as reservation platforms, console games, and assembly-based applications. Passionate about problem-solving, clean system design, and growing into a strong software engineer.',
    stats: [
      { label: 'GPA', value: '3.9' },
      { label: 'Projects', value: '6+' },
      { label: 'Degree', value: 'BSCS' },
      { label: 'Goal', value: 'Software Engineer' }
    ],
    skills: {
      frontend: ['React', 'Next.js', 'JavaScript', 'HTML/CSS'],
      backend: ['Node.js', 'Express', 'SQL', 'Supabase', 'PostgreSQL'],
      tools: ['C++', 'C', 'Python', 'x86 Assembly', 'GitHub', 'Figma']
    },
    education: [
      {
        year: '2023 - 2027',
        degree: 'BS Computer Science',
        school: 'FAST-NUCES, Lahore',
        note: 'Current GPA: 3.9'
      },
      {
        year: '2021 - 2023',
        degree: 'A-Levels, Computer Science',
        school: 'Beaconhouse College Gulberg, Lahore',
        note: 'Grade: A*'
      }
    ],
    links: {
      github: 'https://github.com/Shawaiz788',
      linkedin: 'https://www.linkedin.com/in/shawaiz-ali-rehman-52227427b/',
      email: 'shawaizali788@gmail.com'
    },
    resume: {
      href: '/resume.pdf',
      label: 'Download Resume'
    }
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    email: 'shawaizali788@gmail.com',
    github: 'https://github.com/Shawaiz788',
    linkedin: 'https://www.linkedin.com/in/shawaiz-ali-rehman-52227427b/'
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
