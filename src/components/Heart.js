import React, { useState} from 'react'
// import Ionicon from 'react-ionicons';
// import MdHeart from 'react-ionicons/lib/MdHeart';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';

const Heart = () => {
	const [beat, setBeat] = useState(false);
    
	const clickBeat = () => {
		beat 
		? setBeat(false)
		: setBeat(true)
	}

	return (
		<div>

			<MdHeartOutline
				fontSize="30px" 
				color="red" 
				beat={beat}
				onClick={() => clickBeat()} 
			/>
		</div>
	)
}

export default Heart;

			// <MdHeart
			// 	fontSize="30px" 
			// 	color="red" 
			// 	beat={beat}
			// 	// beat={false}
			// 	onClick={() => clickBeat()} 
			// />