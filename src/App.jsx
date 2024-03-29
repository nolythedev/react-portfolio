import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        {/* Sets homepage to the Home Component */}
      <Route path='/' exact element={<Home/>} />
      <Route path="/projectGallery" element={<ProjectGallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project/:id" element={<Project />} />
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
