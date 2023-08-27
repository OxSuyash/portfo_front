import React from 'react'
import "../styles/Newproject.scss"
import Sidebar from './Sidebar'
import { useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import { Navigate } from 'react-router-dom'
import toast from "react-hot-toast"



const Newproject = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("")
  const [skills, setSkills] = useState("")
  const [isPublished, setIsPublished] = useState(false)

  const addProject = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post(`${server}/project/new`, {
        title, description, link, skills
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      toast.success(data.message)
      setIsPublished(true)
    } catch (error) {
      console.log(error)
    }
  }

  if(isPublished) return <Navigate to={"/dashboard/projects"} />


  return (
    <div className="new-project">
      <Sidebar />
      <div className="new-project-main">
        <p>Title: {title}</p>
        <form action="" className="new-project-form" onSubmit={addProject}>
          <input type="text" placeholder='Project Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea name="" id="" cols="120" rows="15" placeholder='Write about your project...' value={description} onChange={(e) => setDescription(e.target.value)} 
          required></textarea>
          <input type="text" placeholder='link' value={link} onChange={(e) => setLink(e.target.value)} required />
          <input type="text" placeholder='skills' id='skills' value={skills} onChange={(e) => setSkills(e.target.value)} required />
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>

  )
}

export default Newproject