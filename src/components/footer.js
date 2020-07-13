import React from "react"
import "../styles/footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <p>&copy; { new Date().getFullYear()}, My Gatsby Site</p>
        </div>
    )
}

export default Footer