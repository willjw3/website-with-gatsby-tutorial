import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"

const Index = ({data}) => {
  const quotes = data.allDataJson.edges[0].node

    return (
        <Layout>
            <div className="index">
                <h1 className="index-title">Welcome to My Gatsby Site</h1>
                {quotes.quotes ? quotes.quotes.map((quote, i) => {
                    return (
                        <div key={i} style={{width: "50%", background: "beige", marginBottom: "50px", padding: "20px", borderRadius: "5px", border: "3px solid hotpink" }}>
                            <p>"{quote.quote}"</p>
                            <p> -{quote.author}</p>
                        </div>
                    )
                }): "Loading"}
            </div>
        </Layout>
       
    )
}

export default Index

export const query = graphql`
query {
  allDataJson {
    totalCount
    edges {
      node {
        quotes {
          quote
          author
        }
      }
    }
  }
}
`



