import logo from './logo.svg';
import './App.css';
import  { AppBar, Toolbar, Stack, Button, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation';
import { BrowserRouter as Router, Routes, Route, Link,Outlet, Navigate } from 'react-router-dom';
import About from './components/About';
import Home from './Home';
import Experience from './components/Experience'
import Contact from './components/Contact'


const sequence = [
  ' a Developer',   // Types 'One'
  4000,    // Waits 1s
  ' a Creator',   // Deletes 'One' and types 'Two'
  4000,    // Waits 2s
  ' a Thinker',  // Types 'Three' without deleting 'Two',
]

const openResume = () => {
  // Replace 'path/to/your/resume.pdf' with the actual path to your file
  const fileUrl = "/resume.pdf";
  window.open(fileUrl, '_blank');
};

function App() {
  return (
<Router>
  <div className='container'>
    <AppBar className='appBar' position="static">
      <Toolbar>
        {/* Title on the left */}
        <Typography component={Link} to="/" className='name' variant="h6" sx={{ flexGrow: 1 }}>
          Aman Puranik
        </Typography>

        {/* Navigation items on the right */}
        <Button color="inherit" component={Link} to="/about">About me</Button>
        <Button color="inherit" component={Link} to="/experience">Expersience</Button>
        <Button color="inherit" component={Link} to="/contact" >Contact</Button>
        <Button onClick={openResume} color="inherit">Resume</Button>
      </Toolbar>
    </AppBar>

    {/* Parallax stars HTML structure */}
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

  </div>

  <Routes>
    {/* Render the Experience component only for the /experience path */}
    <Route path="/about" element={<About />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />


    {/* Render other components or content for the root path "/" */}
    <Route path="/" element={<Home />} />
  </Routes>
</Router>

  );
}

export default App;
