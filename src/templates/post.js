import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from '../components/SEO';
import Img from "gatsby-image";
import CodeBlock from "../components/CodeBlock";
import Tag from "../components/Tag/Tag";

// const shortcodes = { Link } // Provide any common components here
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}
// const components = {
//   pre: props => <div {...props} />,
//   code: props => <pre style={{color: 'black', "background-color": 'rgb(246,246,246'}} {...props} />
// }


export default ({ data, props, pageContext }) => {
  const post = data.mdx;
  const prev = pageContext.prev;
  const next = pageContext.next;
  const tags = post.frontmatter.tags.map(tag => (
    <Link to={`/tags/${tag.toLowerCase()}`} key={tag}>
      <Tag>{tag}</Tag>
    </Link>
  ))

  const style = {
    spread: {
      display: "flex", 
      justifyContent: "space-between"
    },
    nav: { 
      display: "flex", 
      justifyContent: "space-between",
      // marginBottom: "20px"
    },
    navIndividual: {
      maxWidth: "35%"
    }    
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />      
      <div>
        <h1 style={{ color: 'var(--header)' }}>{post.frontmatter.title}</h1>
        <header style={style.spread}>
          <div>
            {post.frontmatter.date} — {post.timeToRead} min read
          </div>
          <div style={style.spread}>
            {tags}
          </div>
        </header>
        <hr />
        {post.frontmatter.featuredImage &&
        <div>
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        </div>  
        }
        <MDXProvider components={components}>  
          <main {...props}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </main>
        </MDXProvider>  
        <br />
        <br />
        <nav style={style.nav}>
          {prev // if there's prev
            ?  
            <Link style={style.navIndividual} to={prev.node.fields.slug}>
             ← {prev.node.frontmatter.title}
            </Link>
            :
            <div></div>}
          {next 
            ?  // if there's next
            <Link style={style.navIndividual} to={next.node.fields.slug}>
              → {next.node.frontmatter.title}
            </Link>
            :
            <div></div>}          
        </nav>
 
      </div>
    </Layout>
  )
} 

// edit this later
export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
      }
      body
    }
  }
`;
