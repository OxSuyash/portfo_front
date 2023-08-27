import React from 'react'
import "../styles/Viewpost.scss"
import axios from "axios"
import {server} from "../main"
import { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Viewpost = () => {

  const [post, setPost] = useState({})

  const {id} = useParams()

  useEffect(()=> {
    const getPost = async () => {
      const {data} = await axios.get(`${server}/post/get/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      setPost(data.post)
    }
    getPost()

  }, [])


  return (
    <div className="post-view">
        <div className="post-view-title"><p>{post.title}</p></div>
        <div className="post-view-author"><p>Author: {post.author}</p></div>
        <hr />
        <div className="post-view-body"><p>{post.body}</p></div>
    </div>
  )
}

export default Viewpost