import React from 'react'
import "../styles/Home.scss"
import image from "../assets/me.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="image">
          <img src={image} alt="" />

        </div>
        <div className="intro">
          <p className="name">
            Hi, I am <br /> Suyash Karne
          </p>
          <p className="about">
            Aspiring MERN stack developer and Blockchain enthusiast.
          </p>

        </div>
      </div>
      <div className="home-project-button">
        
        <Link to={"mailto:suyashkarne132@gmail.com"} ><button>Get a quote</button></Link>
      </div>
      <div className="quote">
        
      </div>
    </div>
  )
}

export default Home