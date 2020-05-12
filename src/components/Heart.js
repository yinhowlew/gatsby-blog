import React, { useState} from 'react'
// import Ionicon from 'react-ionicons';
// import MdHeart from 'react-ionicons/lib/MdHeart';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';

const Heart = (props) => {
	const [beat, setBeat] = useState(false);
    
	const clickBeat = () => {
		if (beat) {
			setBeat(false)
		} else {
			setBeat(true);
			props.updateLike();
		}
	}

	return (
		<MdHeartOutline
			fontSize="30px" 
			color="red" 
			beat={beat}
			onClick={() => {
				clickBeat();
			}} 
		/>
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