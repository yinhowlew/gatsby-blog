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
		    <div className="intro-content"> 
		    	<p>Hello there, yinhow here.</p> 
		    	<p>2020 update: moved to NYC. Currently doing product at a fashion retail company.</p>
		    	
		    </div>
		</section>
	)
}



export default Intro;



