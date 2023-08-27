import React from 'react'
import "../styles/Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div className="branding">
                <Link to={"/"}>Suyash.</Link>
            </div>

            <div className="menu">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/blog"} className="nav-link">Blog</Link>
                    </li>
                    {/* <li className="nav-item">
                            <Link to={"/about"} className="nav-link">About</Link>
                        </li> */}
                    <li className="nav-item">
                        <Link to={"/project"} className="nav-link">Project</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header