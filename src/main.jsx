import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home'
import Root from './Root'
import About from './component/About/About.jsx'
import Skill from './component/Skill/Skill.jsx'
import Contact from './component/Contact/Contact.jsx'
import Project from './component/Project/Project.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Root />} >
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skill" element={<Skill/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="project" element={<Project/>}/>
        
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router ={router}/>
  
)
