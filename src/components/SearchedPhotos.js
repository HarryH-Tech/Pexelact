import React, { useContext } from 'react';
import Photo from './Photo';
import PexelContext from '../context/PexelContext';


const SearchedPhotos = () => {
	const pexelContext = useContext(PexelContext);
	const { photos } = pexelContext;

	return (
		<>
			<div style={photoGrid}>
				{photos.map(photo => (
					<Photo key={photo.id} photo={photo} />
				))}
			</div>
			
		</>
	)
}

const photoGrid = {		
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '10px',
	justifyContent: 'center',
	width: '95%',
	margin: 'auto'
}

export default SearchedPhotos;


