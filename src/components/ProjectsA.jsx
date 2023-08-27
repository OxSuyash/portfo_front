import React from 'react'
import Sidebar from './Sidebar'
import { server } from '../main'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/ProjectA.scss"
import toast from "react-hot-toast"

const ProjectsA = () => {
  const [projects, setProjects] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(()=> {

    const getProjects = async () => {
      setIsDeleted(false)
      const {data} = await axios.get(`${server}/project/all`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      setProjects(data.projects)
    }
    getProjects()

  }, [isDeleted])

  const deleteProject = async (id) => {
    try {
      const projectId = id.target.id
      const {data} = await axios.delete(`${server}/project/delete/${projectId}`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      toast.success(data.message)
      setIsDeleted(true)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  return (
    <div className="project-admin">
      <Sidebar />

      <div className="project-list">
        <div className="project-list-heading">
          <p>All Projects</p>
        </div>
        <div className="add-project-button">
          <Link to={"/dashboard/projects/new"} ><button>Add Project</button></Link>
        </div>
        <div className="project-list-table">
          <table>
            <tbody>
            <tr>
              <td className="table-column-name" id='project-title'><p>Title</p></td>
              <td className="table-column-name" id='project-skills'><p>Techstack</p></td>
              <td className="table-column-name" id='project-date'><p>Published On</p></td>
              <td className="table-column-name" id='project-edit-button'><p>Edit Project</p></td>
              <td className="table-column-name" id='project-delete-button'><p>Delete Project</p></td>
            </tr>
            </tbody>
          </table>
          {
            projects.map(project => {
              return (
                <div className="card" key={project._id}>

                  <div className="projects">

                    <table className='project-list-table-main'>
                      <tbody>
                        <tr>
                          <td className='post-list-table-column' id='project-title'>{project.title}</td>
                          <td className='post-list-table-column' id='project-skills'>{project.skills}</td>
                          {/* <td><p>{project.link}</p></td> */}
                          <td className='post-list-table-column' id='project-date'>{String(new Date(project.date).toLocaleString())}</td>
                          <td className='post-list-table-column' id='project-edit-button'><Link to={`/dashboard/projects/edit/${project._id}`} ><button>Edit</button></Link></td>
                          <td className='post-list-table-column' id='project-delete-button'><button onClick={deleteProject}  id={project._id}>Delete</button></td>

                        </tr>
                      </tbody>

                    </table>



                  </div>


                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default ProjectsA