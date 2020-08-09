import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostBlock from "../components/postblock"
import "../styles/index.scss"

const Index = ({data}) => {
  console.log(data)
  const posts = data ? data.allMarkdownRemark.edges: ""
  console.log(posts)
    return (
        <Layout>
            <div className="index">
            <h1 className="index-title">Welcome to My Gatsby Site</h1>
              <div className="index-main">
                {posts && 
                    posts.map((post, i) => {
                      return (
                      <PostBlock key={i} post={post} />
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 700)
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          published
          title
          image {
            childImageSharp {
              fluid(maxWidth: 800){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
}
`




