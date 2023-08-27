import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { server, Context } from '../main'
import { useContext } from 'react'
import toast from "react-hot-toast"
import "../styles/Sidebar.scss"

const Sidebar = () => {

    // const {isAuthenticated, setIsAuthenticated} = useContext(Context)
    const {isAuthenticated, setIsAuthenticated} = useContext(Context)

    const logout = async () => {
        try {
          const { data } = await axios.get(`${server}/user/logout`, {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true
          })
          setIsAuthenticated(false)
    
          toast.success(data.message)
        } catch (error) {
          toast.error(error.response.data.message)
        }
      };

      if(!isAuthenticated) return <Navigate to={"/login"} />
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item"><Link to={"/dashboard"} ><p>Dashboard</p></Link></li>
                <li className="sidebar-menu-item"><Link to={"/dashboard/posts"} ><p>Posts</p></Link></li>
                <li className="sidebar-menu-item"><Link to={"/dashboard/projects"} ><p>Projects</p></Link></li>

            </ul>
            <div className="logout">
                <button onClick={logout} className='logout-button'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar