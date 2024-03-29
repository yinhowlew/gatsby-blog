import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Tag from "../components/Tag/Tag";
import Layout from "../components/Layout";
import SEO from '../components/SEO';
// this is for index page of all tags;  for individual tag template, find under template/tag.js
const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {

	const tagList = group.sort((a,b) => b.totalCount - a.totalCount)
		.map(tag => (
			<Link key={tag.fieldValue} to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
				<Tag>{tag.fieldValue} ({tag.totalCount})</Tag>
			</Link>
		))

	return (
		<Layout>
			<SEO title="All posts" />  
			<div>
				<h1>Tags</h1>
				<div  style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
					{tagList} 
				</div>
			</div>
		</Layout>
	)
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`