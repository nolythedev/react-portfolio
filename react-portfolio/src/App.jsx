import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        {/* Sets homepage to the Home Component */}
      <Route path='/' exact element={<Home/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  )
}

export default App
