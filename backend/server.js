
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
    title: 'Mobile & Software Engineer',
    location: 'Lahore, Pakistan',
    status: 'Open to Mobile (React Native / Android Java) & Software Engineering roles',
    bio: 'Computer Science undergraduate at FAST-NUCES (GPA 3.89) with specialized expertise in Mobile App Development (React Native & Android Java), Web applications, AI systems, and low-level software engineering. I build production-ready mobile apps ranging from gig-economy service marketplaces and native Android audio streaming apps to custom React Native camera platforms and Smart TV podcast experiences.',
    stats: [
      { label: 'GPA', value: '3.89' },
      { label: 'Projects', value: '10+' },
      { label: 'Degree', value: 'BSCS' },
      { label: 'Focus', value: 'Mobile & Web' }
    ],
    skills: {
      mobile: ['React Native', 'Android Studio', 'Java (Android)', 'Expo', 'VegaOS / FireTV', 'Mobile UI/UX', 'VisionCamera'],
      frontend: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Python', 'BERT / NLP', 'SQL / PostgreSQL', 'Supabase', 'Firebase'],
      tools: ['Java', 'C++', 'C', 'x86 Assembly', 'Git & GitHub', 'Figma', 'Android SDK']
    },
    education: [
      {
        year: '2023 - 2027',
        degree: 'BS Computer Science',
        school: 'FAST-NUCES, Lahore',
        note: 'Current GPA: 3.89'
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
