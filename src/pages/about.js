import React from "react";
import { graphql, Link } from "gatsby";
// import Header from "../components/header";
// import styles from "../styles/about.module.css";
import Layout from "../components/Layout";
// import Img from "gatsby-image";
import SEO from '../components/SEO';
// import Heart from '../components/Heart';

const About = ({ data }) => {
	return (
	  <Layout>
	    <SEO title="About" />
	    <main>
	    	<h3>About this blog</h3>
		    <p>“Strong opinions, loosely held” is a framework of thinking that I aspire towards.</p>
		    <p>I like to think through issues deeply and develop solid arguments and form firm theoretical grounds (Strong Opinions). But it is also important not to be overly attached to our thinking (Loosely Held) — especially when new information arises that challenges some of our prior assumptions. </p>	    	
	    	<p>This blog is written primarily to compile my own learnings and experiences, and hopefully offer some inspirations and perspectives to my readers.</p>
	    	
	    	<h3>About me</h3>
	    	<p>My professional journey converges on building things — tech products, startups, teams, companies.</p> 
	    	<p>Previously at a tech consulting firm in Singapore, I led the Consumer Technologies division, specialising in B2C Engagement and Loyalty. I advised clients on product strategy, and built a team of developers and designers to create digital experiences in the form of mobile and web applications.</p>
	    	<p>Prior to that, I founded and ran a startup in Vietnam. We had a good run, pivoted a few times, but eventually failed.</p>
	    	<p>Outside work, I like to challenge myself in competitive strategy games — I'm a <a href="http://somuchpoker.com/lee-yin-how-wins-the-record-breaking-asia-poker-league-vietnam-main-event/">regional</a> and <a href="http://www.pokerkaki.com/article/the_singapore_poker_championships_ii_-_poker_in_paradise/">national</a> poker champion.</p>
{/*
			<Img
		      fluid={data.apl.childImageSharp.fluid}
		      alt="winning asia poker league"
		    />
		    <p style={{fontSize: "0.7em", fontStyle: "italic"}}>vanity photo</p>	   	    			    
*/}	    	
	    	<h3>Highlight posts</h3>
	    	<p>1) <Link to="/decision-making-learned-from-poker"> Decision Making Learned from Poker</Link></p>
	    	<p>2) <Link to="/lessons-learned-from-borrowmind-mvp/">Lessons Learned From BorrowMind MVP</Link></p>	 
	    	<p>3) <Link to="/how-to-build-wealth/">How to Build Wealth</Link></p>	    	    	
	    	<p>4) <Link to="/my-best-cold-emails/">My Best Cold Emails that Opened Doors</Link></p>	    		    	
	    	<p>5) <Link to="/applying-for-your-dream-job/">Applying for Your Dream Job</Link></p>	    	

	    	<h3>About this site</h3>
	    	<p>Built with Gatsby and Netlify</p>
	    	<p>Credit: code for dark theme toggle from Dan Abramov</p>
	    	<p>Random: <Link to="/decrypto/">Decrypto</Link> board game built for my friends</p>

		    <h3>Other writings</h3>
		    <p>For my previous company on <a href='https://medium.com/@yinhow'>Medium.</a></p>
		    <p>For poker <span><a href="https://positiveev.wordpress.com">here</a></span>. </p>

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

