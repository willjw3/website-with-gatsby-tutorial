import React from "react"
import { Link } from "gatsby"
import "../styles/header.scss"

const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">My Gatsby Site</h1>
            <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header