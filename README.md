# Portfolio Full-Stack Project

A complete React and Node.js portfolio website template.

## Project Structure

```
portfolio-fullstack/
├── server/              # Node.js + Express backend
│   ├── package.json
│   ├── server.js
│   └── .env
└── client/              # React frontend
    ├── package.json
    ├── public/
    └── src/
        ├── App.js
        ├── index.js
        ├── pages/
        │   ├── Home.js
        │   ├── About.js
        │   ├── Projects.js
        │   └── Contact.js
        └── App.css
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## Running Both Simultaneously

Open two terminals:
1. In one terminal: `cd server && npm run dev`
2. In another terminal: `cd client && npm start`

## Features

- **Home Page**: Hero section with welcome message
- **About Page**: Fetches personal info from backend
- **Projects Page**: Displays projects from API
- **Contact Page**: Contact form that sends data to backend
- **Responsive Design**: Works on desktop and mobile devices
- **API Integration**: Frontend communicates with backend via Axios

## API Endpoints

- `GET /api/portfolio` - Get portfolio/projects data
- `GET /api/about` - Get about me information
- `GET /api/contact` - Get contact information
- `POST /api/contact` - Submit contact form

## Customization

Edit the following files to customize your portfolio:
- `server/server.js` - Update API responses with your info
- `client/src/App.css` - Modify styling
- `client/src/pages/*` - Update page content

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Express.js, Node.js
- **Styling**: CSS3
- **Tools**: Nodemon, React Scripts

## License

MIT
