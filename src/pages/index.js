import React from "react";
import { Link, graphql } from "gatsby"
import '../utils/global.css'
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Tag from "../components/Tag/Tag"
import kebabCase from "lodash/kebabCase"  // necessary?
import SEO from '../components/SEO';
// import Img from "gatsby-image";

const style = {
	tagGroup: {
		display: "flex",
		flexWrap: "wrap",
	},
}

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />   
      <div>
        <h1>
          Strong Opinions, Loosely Held
        </h1>
        <br />
        <Intro data={data.headshot.childImageSharp.fixed} />
        

        <h3>Topics</h3>
        <div style={style.tagGroup}> 
        	{data.allMdx.group.map(tag => 
        		<Link
        			to={`/tags/${kebabCase(tag.fieldValue)}/`} 
        			key={tag.fieldValue} 
        		>
        			<Tag>
        				{tag.fieldValue} ({tag.totalCount})
        			</Tag>
        		</Link>)
        	}
        </div>

        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h3 className="home-title">
                {node.frontmatter.title}
              </h3>
            </Link>
            <div style={{ fontSize: '0.8em' }}>
            	{node.frontmatter.date} <span> — {node.timeToRead} min read</span>
            </div>	
            <p>{node.frontmatter.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
// (sort: { fields: [frontmatter___date], order: DESC })
export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount	#unused now for total posts
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    headshot: file(relativePath: { eq: "yh-header-small.png" }) {
      childImageSharp {
        fixed(width: 150, height: 155) {   # note this is FIXED, not FLUID
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


// export default () => (
// 	<div>
// 		<Link to="about">About</Link>
// 		<h1>hello world</h1>
// 		<p>this is yinhow</p>
// 	</div>
// )