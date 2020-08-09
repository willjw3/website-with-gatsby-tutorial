import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../styles/postblock.scss"

const PostBlock = ({post}) => {
    console.log(post)
    return (
        <div className="postblock">
            <Link to={post.node.fields.slug}>
                <h1 className="postblock-title">{post.node.frontmatter.title}</h1>
            </Link>
            
            <small className="postblock-date">{post.node.frontmatter.date}</small>
            <hr/>
            <div className="postblock-image">
                {post.node.frontmatter.image && 
                    <Img 
                        fluid={post.node.frontmatter.image.childImageSharp.fluid} 
                        style={{width: "100%"}}
                    />
                }
            </div>
            {/* <div dangerouslySetInnerHTML={{__html: post.node.html}} /> */}
            <p>{post.node.excerpt}</p>
        </div>
    )
}

export default PostBlock