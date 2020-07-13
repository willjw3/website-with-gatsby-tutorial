import React from "react"
import { Link } from "gatsby"
import "../styles/header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="header-top-content">
              <Link className="header-top-content-title" to="/"><h1>My Gatsby Site</h1></Link>  
            </div>
            <div className="header-bottom-content">
            <div className="header-bottom-content-links">
                    <Link className="header-bottom-content-links-link" to="/">Home</Link>
                    <Link className="header-bottom-content-links-link" to="/about">About</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header