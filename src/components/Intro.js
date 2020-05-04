import React from "react"
import Img from "gatsby-image";

const style = {
	section: {
		display: "flex",
		alignItems: "flex-start"
	},
	image: {
		marginRight: "10px",
		// width: "30%"
	},
	content: {
		width: "70%",
		// background: "yellow"
	}
}


const Intro = ({ data }) => {
	return (
		<section style={style.section}>
	        <Img
		      fixed={data} // note it's Fixed
		      alt="yinhow-headshot"
		      style={style.image}
		    />	 
		    <content style={style.content}>
		    	<p>hello there, yinhow here.</p>
		    	<p>2020 update: currently on sabbatical in NYC. will be writing on my learnings during this sabbatical while surviving pandemic.</p>
		    	
		    </content>
		</section>
	)
}



export default Intro;



