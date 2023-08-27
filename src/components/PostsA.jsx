import React from 'react'
import Sidebar from './Sidebar'
import "../styles/PostsA.scss"
import { useState, useEffect } from 'react'
import { server } from '../main'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"

const PostsA = () => {

    const [posts, setPosts] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        setIsDeleted(false)
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

    }, [isDeleted])

    const deletePost = async (id) => {
        try {
            const postId = id.target.id
            const { data } = await axios.delete(`${server}/post/delete/${postId}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message)
            setIsDeleted(true)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="post-admin">
            <Sidebar />

            <div className="posts-list">
                <div className="post-list-heading">
                    <p>All Posts</p>
                </div>
                <div className="add-post-button">
                    <Link to={"/dashboard/posts/new"} ><button>Publish new post</button></Link>
                </div>
                <div className="post-list-table">

                    <table>
                        <tbody>
                            <tr>
                                <td className='table-column-name' id='post-title'><p>Title</p></td>
                                <td className='table-column-name' id='post-author'><p>Author</p></td>
                                <td className='table-column-name' id='post-date'><p>Published On</p></td>
                                <td className='table-column-name' id='post-view-button'><p>View Post</p></td>
                                <td className='table-column-name' id='post-edit-button'><p>Edit Post</p></td>
                                <td className='table-column-name' id='post-delete-button'><p>Delete Post</p></td>
                            </tr>
                        </tbody>

                    </table>

                    {
                        posts.map(post => {
                            return (
                                <div className="card" key={post._id}>

                                    <div className="posts">

                                        <table className='post-list-table-main'>
                                            <tbody>
                                                <tr>
                                                    <td className='post-list-table-column' id='post-title'><p>{post.title}</p></td>

                                                    <td className='post-list-table-column' id='post-author'><p>{post.author}</p></td>
                                                    <td className='post-list-table-column' id='post-date'><p>{String(new Date(post.date).toLocaleString())}</p></td>
                                                    <td className='post-list-table-column' id='post-view-button'><Link to={`/blog/${post._id}`} target='_blank'><button>View post</button></Link></td>
                                                    <td className='post-list-table-column' id='post-edit-button'><Link to={`/dashboard/posts/edit/${post._id}`} ><button>Edit</button></Link></td>
                                                    <td className='post-list-table-column' id='post-delete-button'><button onClick={deletePost} id={post._id}>Delete</button></td>
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

export default PostsA