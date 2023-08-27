import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import "../styles/Editpost.scss"
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '../main'
import toast from "react-hot-toast"


const Editpost = () => {
    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [editDone, setEditDone] = useState(false)

    useEffect(() => {
        setEditDone(false)
        const getPost = async () => {
            const { data } = await axios.get(`${server}/post/get/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setTitle(data.post.title)
            setBody(data.post.body)
        }
        getPost()
    }, [])

    const editPost = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.put(`${server}/post/update/${id}`, {
                title, body
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            setIsEdited(false)
            setEditDone(true)
        } catch (error) {
            console.log(error)
        }
    }

    if (editDone) return <Navigate to={"/dashboard/posts"} />

    return (
        <div className="edit-post">
            <Sidebar />

            <div className="edit-post-main">
                <p>Post Title: {title} <br /> Post Id: {id} </p>
                <form action="" className="edit-post-form" onSubmit={editPost}>
                    <input type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                        setIsEdited(true)
                    }} required />
                    <textarea name="" id="" cols="120" rows="35" placeholder='Start writing new post' value={body} onChange={(e) => {
                        setBody(e.target.value)
                        setIsEdited(true)
                    }} required></textarea>
                    <button disabled={!isEdited} type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default Editpost