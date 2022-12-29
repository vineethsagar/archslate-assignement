import { useState } from 'react'
import './App.css'
import Back from './components/Back/Back'
import JobPage from './components/JobPage/JobPage'
import NavBar from './components/NavBar/NavBar'
function App() {
  return (
    <div className='App'>
        <NavBar />
        <JobPage />
    </div>
  )
}

export default App
