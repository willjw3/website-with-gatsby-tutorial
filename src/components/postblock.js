import React from "react"
import "../styles/postblock.scss"

const PostBlock = ({post}) => {
    console.log(post)
    return (
        <div className="postblock">
            <h1 className="postblock-title">{post.node.frontmatter.title}</h1>
            <small className="postblock-date">{post.node.frontmatter.date}</small>
            <hr/>
            {/* <div dangerouslySetInnerHTML={{__html: post.node.html}} /> */}
            <p>{post.node.excerpt}</p>
        </div>
    )
}

export default PostBlock