import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostBlock from "../components/postblock"
import "../styles/index.scss"

const Index = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
    return (
        <Layout>
            <div className="index">
            <h1 className="index-title">Welcome to My Gatsby Site</h1>
              <div className="index-main">
                {posts && 
                    posts.map((post, i) => {
                      return (
                      <PostBlock post={post} />
                      )
                    })
                  }
              </div>  
            </div>
        </Layout>
       
    )
}

export default Index

export const query = graphql`
query HomeQuery {
  allMarkdownRemark {
    edges {
      node {
        excerpt(pruneLength: 100)
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          published
          title
        }
        html
      }
    }
  }
}
`




