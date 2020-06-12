import React from "react"
import Img from "gatsby-image";

const style = {
	section: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between"
	},
	image: {
		marginRight: "10px",
		width: "150px",
		height: "155px"
	},
	// note content uses css instead due to media
}


const Intro = ({ data }) => {
	return (
		<section style={style.section}>
	        <Img
		      fluid={data} // note it's Fixed
		      alt="yinhow-headshot"
		      style={style.image}
		    />	 
		    <content className="intro-content"> 
		    	<p>hello there, yinhow here.</p> 
		    	<p>2020 update: currently on sabbatical in NYC. will be writing on my learnings during this sabbatical while surviving the pandemic.</p>
		    	
		    </content>
		</section>
	)
}



export default Intro;



