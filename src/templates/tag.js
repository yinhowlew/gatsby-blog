import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import SEO from '../components/SEO';


const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMdx
	const tagHeader = `${totalCount} posts tagged with "${tag}"`

	const articleList = edges
		.map(({ node }) => {
			const { slug } = node.fields
			const { title } = node.frontmatter
			return (
				<li key={slug}>
					<Link to={slug}>{title}</Link>
				</li>
			)
		})

	return (
		<Layout>
			<SEO title={tag} description={`Posts in ${tag} category`} />    
			      
			<h2>{tagHeader}</h2>

			<ul>
				{articleList}
			</ul>

			<Link to="/tags">all tags</Link>
			<br />
		</Layout>
	)
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`