import React from "react";

// 
// .topic-tag {
//   font-size: 0.8em;
//   color: white;
//   margin-right: 10px;
//   margin-bottom: 10px;
//   border: solid 1px;
//   border-color: #1ca086;
//   border-radius: 10px;
//   padding: 0.4rem;
//   line-height: 0.8;
//   background-color: black;
// }
// 
// .topic-tag:hover {
//   background-color: grey;
// }

const Tag = ({ children, isFeatured }) => {
	return (
		<div 
			{...isFeatured && { style: { 
				
			}}}
			className="topic-tag"
		>
			{children}
		</div>
	)
}

export default Tag;