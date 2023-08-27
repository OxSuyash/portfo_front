import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../main'
import "../styles/Viewproject.scss"
import { Link } from 'react-router-dom'

const Viewproject = () => {

  const [project, setProject] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const getProject = async () => {
      const { data } = await axios.get(`${server}/project/get/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      setProject(data.project)
    }
    getProject()

  }, [])

  return (
    <div className="project-view">
      <div className="project-view-title"><p>{project.title}</p></div>
      <hr />
      <div className="project-view-description"><p> <span className='item-name'>Description:</span>  {project.description}</p></div>
      <div className="project-view-skills"><p><span className="item-name">Techstack used:</span> {project.skills}</p></div>

      <div className="project-view-button">
        <Link to={project.link} target='_blank'><button>Go to Project</button></Link>
      </div>
    </div>
  )
}

export default Viewproject