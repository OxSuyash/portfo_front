import React from 'react'
import "../styles/Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <p>Quick-Links</p>
      </div>
      <div className="links" >
        <Link to={"https://www.linkedin.com/in/oxsuyash/"} target='_blank' className="footer-link"><button>LInkedIn</button></Link>
        <Link to={"https://twitter.com/OxSuyash"} target='_blank' className="footer-link"><button>Twitter</button></Link>
        <Link to={"https://github.com/OxSuyash"} target='_blank' className="footer-link"><button>Github</button></Link>
      </div>
      <hr />
      <div className="copyright">
        <p>copyrights &copy; <Link to={"/login"} >suyash karne</Link> 2023</p>
      </div>
    </div>
  )
}

export default Footer