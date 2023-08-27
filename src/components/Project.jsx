import React from "react";
import "../styles/Project.scss"
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import {server} from "../main.jsx"
import axios from "axios"
import toast from "react-hot-toast"


const Project = () => {
    const [project, setProject] = useState([])
    


    useEffect(()=> {
        const getProjects = async () => {
            const {data} = await axios.get(`${server}/project/all`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setProject(data.projects)
        }
        getProjects()

        toast.success("projects")
    }, [])

    
  return (
    <div className="project">
            <div className="page-title">
                <p>Projects</p>
            </div>

            {
                project.map(project => {
                    return (
                        <div className="card" key={project._id}>

                            <div className="project-card">
                                <div className="project-title">
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="project-desc">
                                    <p>{project.description.slice(0,200) + "....."}</p>
                                </div>
                                <div className="project-button">
                                    <Link  to={`/project/${project._id}`}  className="project-link" rel="noopener noreferrer"><button >Know More</button></Link>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
  )
}

export default Project
