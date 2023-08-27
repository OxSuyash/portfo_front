import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "../styles/Blog.scss"
import { useEffect } from 'react'
import { useState } from 'react'
import { server } from '../main.jsx'

const Blog = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get(`${server}/post/all`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setPosts(data.posts)
        };
        getPosts()

    }, [])


    return (
        <div className="blog-main">
            <div className="blog-page-title">
                <p>Blogs</p>
            </div>

            {
                posts.map(post => {
                    return (
                        <div className="card" key={post._id}>

                            <div className="blogs">

                                <div className="blog-card">
                                    <div className="blog-title">
                                        <h2>{post.title}</h2>
                                    </div>
                                    <div className="blog-desc">
                                        <p>{post.body.slice(0, 200) + "....."} </p>
                                    </div>
                                    <div className="blog-button">
                                        <Link to={`/blog/${post._id}`} className="blog-link"><button>Know More</button></Link>
                                    </div>
                                </div>

                            </div>


                        </div>
                    )
                })
            }
        </div>

    )
}

export default Blog