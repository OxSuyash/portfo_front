import React from 'react'
// import axios from "axios"
// import { useContext } from 'react'
import { Context } from '../main'
import {  Navigate } from 'react-router-dom'
import { useContext } from 'react'
import "../styles/Dashboard.scss"
import Sidebar from './Sidebar'


const Dashboard = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context)
  


  if (!isAuthenticated) return <Navigate to={"/login"} />
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        Welcome to the dashboard
      </div>
    </div>
  )
}

export default Dashboard