import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from '../components/SEO';
import Img from "gatsby-image";
import CodeBlock from "../components/CodeBlock";
import Tag from "../components/Tag/Tag";
import Heart from '../components/Heart';
import firebase from '../config/Fire';
import ReactGA from 'react-ga';

const style = {
	spread: {
	  display: "flex", 
	  justifyContent: "space-between"
	},
	nav: { 
	  display: "flex",
	  width: "100%", 
	},
	navLeft: {
	  width: "33.3%",
	  textAlign: "left",
	},    
	navMid: {
	  width: "33.3%",
	  textAlign: "center"
	},    
	navRight: {
	  width: "33.3%",
	  textAlign: "right",
	},
	navIndividual: {
	  width: "33.3%"
	}                  
}
const components = {
	pre: props => <div {...props} />,
	code: CodeBlock,
	Link
}
// add any components we want to use in posts up e.g. Link
// const components = {
//   pre: props => <div {...props} />,
//   code: props => <pre style={{color: 'black', "background-color": 'rgb(246,246,246'}} {...props} />
// }


export default ({ data, props, pageContext }) => {
	const post = data.mdx;
	const prev = pageContext.prev 
 	const next = pageContext.next;  

	const tags = post.frontmatter.tags.map(tag => (
		<Link to={`/tags/${tag.toLowerCase()}`} key={tag}>
		  <Tag>{tag}</Tag>
		</Link>
	))

	const image = post.frontmatter.featuredImage?.childImageSharp.resize

 	const [like, setLike] = useState(0); 

	useEffect(() => {
		//fetch like from firestore
		const original = post.fields.slug;
		const slug = original.substring(1, original.length-1);
		const fetchLike = async () => {
			const post = await firebase.firestore().collection('post').doc(slug).get()

			try {
				if (post.exists) setLike(post.data().count);
				else setLike(0);       
			} catch (e) {
				console.log(e)
			}
		}

		fetchLike();

		ReactGA.initialize('UA-165622494-1');
	}, [post.fields.slug])

	const logClick = (slug) => {
		ReactGA.event({
			category: 'event',
			action: 'clicklike',
			label: slug,
		})  
	}
	const updateLike = () => {
		const original = post.fields.slug;
		const slug = original.substring(1, original.length-1);

		firebase.firestore().collection("post").doc(slug).set({
		  count: like + 1
		})

		setLike(like + 1);

		logClick(slug)
	}

	const generateRandomSlug = () => {
		const totalCount = data.allMdx.totalCount;
		let x = Math.floor((Math.random() * totalCount)); //generate random between 0 to excluding totalCount    
		let destination = data.allMdx.edges[x].node.fields.slug;

		// while (destination === post.fields.slug && data.allMdx.edges[x].node.frontmatter.title.slice(0,7) !== "(draft)") {
		while (destination === post.fields.slug) {
			x = Math.floor((Math.random() * totalCount));
			destination = data.allMdx.edges[x].node.fields.slug;
		}

		return destination
	}

	return (
		<Layout>
			<SEO 
				title={post.frontmatter.title} 
				description={post.frontmatter.description}
				image={image} 
			/>      
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
				<hr />

				<h3>Thank you for reading</h3>
				<p>If you'd like a monthly email on new posts, please pop your email <a href="https://tinyletter.com/yinhow">here</a>.</p>
				<p>If you like this article, please click on the heart icon below.</p>


				<Heart updateLike={updateLike} />
				<p>{like} loves</p>
				<br />

				<nav style={style.nav}>
					{prev ? 
						<Link style={style.navLeft} to={prev.node.fields.slug}>
							← {prev.node.frontmatter.title}
						</Link>
						:
						<div style={style.navLeft}></div>
					}

					<Link style={style.navMid} to={generateRandomSlug()}>
						Surprise me
					</Link>

					{next ?  
						<Link style={style.navRight} to={next.node.fields.slug}>
							→ {next.node.frontmatter.title}
						</Link>
						:
						<div style={style.navLeft}></div>
					}          
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
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }        
      }
      fields {
        slug
      }
      body
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount  #unused now for total posts
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
`;
