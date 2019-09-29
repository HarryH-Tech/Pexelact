import React, { useContext } from 'react';

const Photo = ({ photo: { width, height, url, photographer, src} }) => {

	
	
	return (
		<>
			
			<div className="card" style={cardStyles}>			
				{src ? (
					<img style={imgStyle} src={src.medium} alt="" />
				) : (
					<h1>no photo</h1>
				)}
				
				{photographer ? (
					<div>{photographer}</div>
				) : (
					<div> sorry, no photographer available </div>
				)}
			</div>
		</>
	)
}

const imgStyle = {
	width: '100%',
	height: '250px'
}

const cardStyles = {
	textAlign: 'center'
}


export default Photo;


