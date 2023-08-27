import React from 'react'
import "../styles/Newpost.scss"
import Sidebar from './Sidebar'
import { useState, useContext } from 'react'
import { server, Context } from '../main'
import axios from 'axios'
import toast from "react-hot-toast"
import { Navigate } from 'react-router-dom'

const Newpost = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isPublished, setIsPublished] = useState(false)

    const addNewPost = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${server}/post/new`, {
                title, body
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

    if(isPublished) return <Navigate to={"/dashboard/posts"} />

    return (
        <div className="new-post">
            <Sidebar />
            <div className="new-post-main">
                <p>Title:&nbsp;{title}</p>
                <form action="" className="new-post-form" onSubmit={addNewPost}>
                    <input type="text" placeholder='Post Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <textarea name="" id="" cols="120" rows="30" placeholder='Start writing the post' value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                    <button type="submit">Publish</button>
                </form>
            </div>
        </div>
    )
}

export default Newpost