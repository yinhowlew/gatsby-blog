import React, { useState, useEffect } from "react";
// import { graphql, Link } from "gatsby";
import { Words } from "../utils/decryptoWords";
import Layout from "../components/Layout";
import SEO from '../components/SEO';

const styles = {
	"decryptoPage": {
		marginBottom: "40px"
	},
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
 		margin: "auto",
 		marginLeft: "10px",
 		marginRight: "10px"
 	},
 	"instruction": {
 		fontSize: "1.2em",
 		marginTop: "10px",
 		marginBottom: "0px"
 	}, 	
 	"codeSection": {
 		display: "flex",
 		flexDirection: "column",
 		justifyContent: "center",
 		alignItems: "center",
 		marginBottom: "40px"
 	},
 	"code": {
 		fontSize: "4em"
 	} 	
}

const randomNumber = () => {
	const length = Words.length;
	return Math.floor((Math.random() * length)); // between 0 to max - 1
}


const Decrypto = ({ data }) => {
	const [wordOne, setWordOne] = useState(Words[`${randomNumber()}`].Words); 	// weird array structure due to converting csv to JS array
	const [wordTwo, setWordTwo] = useState(Words[`${randomNumber()}`].Words);
	const [wordThree, setWordThree] = useState(Words[`${randomNumber()}`].Words);
	const [wordFour, setWordFour] = useState(Words[`${randomNumber()}`].Words);

	const [isConfirm, setIsConfirm] = useState(false);
	const [codeGenerated, setCodeGenerated] = useState("Click to generate code");

	useEffect(() => {
		if (localStorage.getItem('words')) {
			const wordsArray = JSON.parse(localStorage.getItem('words')).words
			setWordOne(wordsArray[0]);
			setWordTwo(wordsArray[1]);
			setWordThree(wordsArray[2]);
			setWordFour(wordsArray[3]);	
		} 
	}, [])

	const refreshAllWords = () => {
		setWordOne(Words[`${randomNumber()}`].Words);
		setWordTwo(Words[`${randomNumber()}`].Words);
		setWordThree(Words[`${randomNumber()}`].Words);
		setWordFour(Words[`${randomNumber()}`].Words);			
	}

	// save to localStorage & show Confirm screen
	const confirmWords = () => {
	   setIsConfirm(true)

	   localStorage.setItem('words', JSON.stringify({
          words: [wordOne, wordTwo, wordThree, wordFour],
       }));  
	}

	const generateCode = () => {
		// let codeOne, codeTwo, codeThree;
		let codeArray = [1,2,3,4];
		let currentIndex = codeArray.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle.
		while (currentIndex !== 0) {			
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = codeArray[currentIndex];
			codeArray[currentIndex] = codeArray[randomIndex];
			codeArray[randomIndex] = temporaryValue;
		}
		codeArray.pop() // show 3 nums only
		setCodeGenerated(codeArray.join(" ")) 
	}

	return (
		<Layout>
		    <SEO title="Decrypto" />	
		    {!isConfirm
		    	?
			    <main style={styles.decryptoPage}>
			    	<h1 style={styles.header}>Decrypto</h1>
			    	<section style={styles.buttonGroup} >
			    		<div>
					    	<button style={styles.button} onClick={refreshAllWords}>Refresh</button>
					    	<button style={styles.button} onClick={confirmWords}>Confirm</button>			
				    	</div>    	
				    	<p style={styles.instruction}>
				    		or <span role="img" aria-label="tap">👇</span> tap to change individual word
				    	</p>
			    	</section>

			    	<section className="dc-card-group">
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
			    	</section>
				</main> 		    	
		    	:
		    	<main style={styles.decryptoPage}>
		    		<section style={styles.codeSection}>
		    			<h1 style={styles.code}>{codeGenerated}</h1>
		    			<div>
						    <button style={styles.button} onClick={generateCode}>New Code</button>	
						    <button style={styles.button} onClick={() => setIsConfirm(false)}>Back</button>	
						</div>        			
		    		</section>
			    	<section className="dc-card-group">
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
			    	</section>
		    	</main>
		    }	

		</Layout>
	)
}

export default Decrypto

