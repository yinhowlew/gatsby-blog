import React from "react";
import { graphql, Link } from "gatsby";
// import Header from "../components/header";
// import styles from "../styles/about.module.css";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import SEO from '../components/SEO';
// import Heart from '../components/Heart';

const About = ({ data }) => {
	return (
	  <Layout>
	    <SEO title="About" />
	    <main>
	    	<h3>About this blog</h3>
		    <p>“Strong opinions, loosely held” is a framework of thinking that I aspire towards.</p>
		    <p>I like to think through issues deeply and develop solid arguments and form firm theoretical grounds (Strong Opinions). But it is also important not to be overly attached to our thinking (Loosely Held) – especially when new information arises that challenges some of our prior assumptions. </p>	    	
	    	<p>This blog is written primarily for myself. See <Link to="/hello-world" key="hello-world">here</Link> for more explanation.</p>
	    	<h3>About me</h3>
	    	<p>My professional journey converges on building things - tech products, startups, teams, companies.</p> 
	    	<p>Previously at a tech consulting firm in Singapore, I led the Consumer Technologies division, specialising in B2C Engagement and Loyalty. I advised clients on product strategy, and built a team of developers and designers to execute digital products.</p>
	    	<p>Prior to that, I founded and ran a startup in Vietnam. We had a good run, pivoted a few times, but eventually failed.</p>
	    	<p>I like to challenge myself in competitive strategy games such as Poker and Settlers of Catan - I'm a <a href="http://somuchpoker.com/lee-yin-how-wins-the-record-breaking-asia-poker-league-vietnam-main-event/">regional</a> and <a href="http://www.pokerkaki.com/article/the_singapore_poker_championships_ii_-_poker_in_paradise/">national</a> poker champion.</p>
			<Img
		      fluid={data.apl.childImageSharp.fluid}
		      alt="winning asia poker league"
		    />
		    <p style={{fontSize: "0.7em", fontStyle: "italic"}}>vanity photo</p>	   	    			    
	    	<h3>About this site</h3>
	    	<p>Built with Gatsby and Netlify</p>
	    	<p>Credit: dark theme toggle and implementation from Dan Abramov</p>

		    <h3>Links</h3>
		    <p>work-related writings on <a href='https://medium.com/@yinhow'>Medium.</a></p>
		    <p>I also write about poker <span><a href="https://positiveev.wordpress.com">here</a></span>. </p>
		</main> 
	  </Layout>		
	)
}

export default About



// relativePath
export const query = graphql`
  query MyQuery{
    apl: file(relativePath: { eq: "yinhow-apl-winning-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
	spc: file(relativePath: { eq: "yinhow-spc-winning.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }    
  }
`
// <ul>interviews: 
//	<li><a href='https://www.8world.com/lifestyle/tech/article/click-it-discussion-832896'>Mediacorp (Singapore)</a></li>
//	<li><a href='https://www.techinasia.com/ig9-vietnams-crowdfunding-platform-launches-today'>Tech in Asia</a></li>
//</ul>

