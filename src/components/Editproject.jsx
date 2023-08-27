import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { server } from '../main'
import toast from "react-hot-toast"
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
import "../styles/Editproject.scss"

const Editproject = () => {
    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [skills, setSkills] = useState("")

    useEffect(() => {
        const getProject = async () => {
            const { data } = await axios.get(`${server}/project/get/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setTitle(data.project.title)
            setDescription(data.project.description)
            setLink(data.project.link)
            setSkills(data.project.skills)
        }
        getProject()

    }, [])

    const editProject = async (e) => {
        e.preventDefault()

        try {
            const {data} = await axios.put(`${server}/project/update/${id}`, {
                title, description, link, skills
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="edit-project">
            <Sidebar />
            <div className="edit-project-main">
                <p> Title: {title} <br /> Project Id: {id} </p>
                <form action="" className="edit-project-form" onSubmit={editProject}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <textarea name="" id="" cols="120" rows="30" placeholder='Describe your project' value={description} onChange={(e) => setDescription(e.target.value)}
                        required></textarea>
                    <input type="text" placeholder='link' value={link} onChange={(e) => setLink(e.target.value)} required />
                    <input type="text" placeholder='skills' value={skills} id='skills' onChange={(e) => setSkills(e.target.value)} required />
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>

    )
}

export default Editproject