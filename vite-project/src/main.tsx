import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MyButton from './components/MyButton.tsx'
import Heading from './components/Heading.tsx'
import Section from './components/Section.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
