import React from "react";
import { Link, graphql } from "gatsby"
import '../utils/global.css'
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Tag from "../components/Tag/Tag"
// import kebabCase from "lodash/kebabCase" 
import SEO from '../components/SEO';


export default ({ data }) => {

	const seoImage = data.socialseo.childImageSharp.resize;

	const tagGroup = data.allMdx.group
		.sort((a,b) => b.totalCount - a.totalCount)
		.map(tag => 
			<Link
				to={`/tags/${tag.fieldValue.toLowerCase()}/`} 
				key={tag.fieldValue} 
			>
				<Tag>
					{tag.fieldValue} ({tag.totalCount})
				</Tag>
			</Link>
		)

		// NOTE: featured number manual for now
	const tagGroupWithFeatured = [
		<Link
			to="/featured" 
			key="feature-posts"
		>
			<Tag isFeatured={true} >
					<span role="img" aria-label="featured">✨</span> Featured (6) 
			</Tag>
		</Link>
		, ...tagGroup
	]		

	const articleList = data.allMdx.edges
		// .filter(({ node }) => node.frontmatter.title.slice(0,7) !== "(draft)") // new to hide draft
		.map(({ node }) => 
			<div key={node.id}>
				<Link to={node.fields.slug}>
					<h3 className="home-title">
						{node.frontmatter.featured && <span role="img" aria-label="featured">✨ </span>} 
						{node.frontmatter.title}
					</h3>
				</Link>

				<div style={{ fontSize: '0.8em' }}>
					{node.frontmatter.date} <span> — {node.timeToRead} min read</span>
				</div>	

				<p>{node.frontmatter.description}</p>
			</div>
		)

	return (
		<Layout>
			<SEO title="Yin How's Blog on Tech, Business, Startup" image={seoImage}/>   

			<div>
				<h1>Strong Opinions, Loosely Held</h1>
				<br />
				<Intro data={data.headshot.childImageSharp.fluid} />

				<h3 style={{ marginBottom: "20px"}}>Topics</h3>

				<div style={{ display: "flex", flexWrap: "wrap"}}>{tagGroupWithFeatured}</div>

				{articleList}
			</div>

		</Layout>
	)
}
// (sort: { fields: [frontmatter___date], order: DESC })
//       group(field: frontmatter___tags) {
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
            featured
          }
          excerpt
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
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialseo: file(relativePath: { eq: "coding.jpg" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }    
  }
`


/* 

note: don't update gatsby-cli, otherwise need to upgrade NPM version

gatsby develop
gatsby build
git add . / commit / push origin master


*/