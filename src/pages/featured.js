import React from "react";
import { Link, graphql } from "gatsby";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Tag from "../components/Tag/Tag"
import SEO from '../components/SEO';


const Featured = ({ data }) => {
	const { edges } = data.allMdx

	const featuredHeader = `Featured`

  const articleList = edges
    .map(({ node }) => 
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3 className="home-title">
            {node.frontmatter.title}
          </h3>
        </Link>

        <div style={{ fontSize: '0.8em' }}>
          {node.frontmatter.date} <span> — {node.timeToRead} min read</span>
        </div>  

        <p>{node.frontmatter.description}</p>
      </div>
    )

  const tagsForAllArticles = data.tagGroups.group
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

	return (
		<Layout>
			<SEO title="Yin How's featured posts" description="Tech, Busines, Startup, Career" />    
			      
			<h1>{featuredHeader}</h1>

			{articleList}

      <h3 style={{ marginBottom: "20px"}}>Topics</h3>

      <div style={{ display: "flex", flexWrap: "wrap"}}>{tagsForAllArticles}</div>

		</Layout>
	)
}

// Tags.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }
export default Featured
export const pageQuery = graphql`
  query {
    tagGroups: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: {eq: "yes"} } }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`