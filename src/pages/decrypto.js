import React, { useState } from "react";
// import { graphql, Link } from "gatsby";
import { Words } from "../utils/decryptoWords";
import Layout from "../components/Layout";
import SEO from '../components/SEO';

 const styles = {
 	"header": {
 		textAlign: "center",
 		marginBottom: "30px"
 	},
 	"buttonGroup": {
 		display: "flex",
 		flexDirection: "column",
 		margin: "auto",
 		alignItems: "center",
 		justifyContent: "center",
 		marginBottom: "30px"
 	},
 	"button": {
 		padding: "9px 15px",
 		backgroundColor: "#d23669",
 		color: "white",
 		border: "none",
 		borderRadius: "10px",
 		cursor: "pointer",
 		outline: "none",
 		boxShadow: "3px 3px 1px rgba(0, 0, 0, 0.1)",
 		margin: "auto"
 	},
 	"instruction": {
 		fontSize: "1.2em",
 		marginTop: "10px",
 		marginBottom: "0px"
 	}, 	
 }

const randomNumber = () => {
	const length = Words.length;
	return Math.floor((Math.random() * length)); // between 0 to max - 1
}


const Decrypto = ({ data }) => {
	const [wordOne, setWordOne] = useState(Words[`${randomNumber()}`].Words);
	const [wordTwo, setWordTwo] = useState(Words[`${randomNumber()}`].Words);
	const [wordThree, setWordThree] = useState(Words[`${randomNumber()}`].Words);
	const [wordFour, setWordFour] = useState(Words[`${randomNumber()}`].Words);
	// weird array structure due to converting csv to JS array
	const refreshAllWords = () => {
		setWordOne(Words[`${randomNumber()}`].Words);
		setWordTwo(Words[`${randomNumber()}`].Words);
		setWordThree(Words[`${randomNumber()}`].Words);
		setWordFour(Words[`${randomNumber()}`].Words);			
	}

	return (
		<Layout>
		    <SEO title="Decrypto" />		
		    <main>
		    	<h1 style={styles.header}>Decrypto</h1>
		    	<div style={styles.buttonGroup} >
			    	<button 
			    		style={styles.button} 
			    		onClick={refreshAllWords}
			    	>
			    		Refresh All
			    	</button>
			    	<p style={styles.instruction}>
			    		or <span role="img" aria-label="tap">👇</span> tap to change individual word
			    	</p>
		    	</div>

		    	<div className="dc-card-group">
		    		<button className="dc-card" onClick={() => setWordOne(Words[`${randomNumber()}`].Words)}>
		    			<p>{wordOne.toLowerCase()}</p>
		    		</button>
		    		<button className="dc-card" onClick={() => setWordTwo(Words[`${randomNumber()}`].Words)}>
		    			<p>{wordTwo.toLowerCase()}</p>
		    		</button>
		    		<button className="dc-card" onClick={() => setWordThree(Words[`${randomNumber()}`].Words)}>
		    			<p>{wordThree.toLowerCase()}</p>
		    		</button>
		    		<button className="dc-card" onClick={() => setWordFour(Words[`${randomNumber()}`].Words)}>
		    			<p>{wordFour.toLowerCase()}</p>
		    		</button>
		    	</div>
			</main> 
		</Layout>
	)
}

export default Decrypto

