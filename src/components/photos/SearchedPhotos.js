import React, { useContext } from 'react';
import PexelContext from '../../context/PexelContext';
import Photo from './Photo';


const SearchedPhotos = () => {
	const pexelContext = useContext(PexelContext);
	const { photos } = pexelContext;

	return (
		<>
			<div className="media-grid">
				{photos.map(photo => (
					<Photo key={photo.id} photo={photo} />
				))}
			</div>
			
		</>
	)
}


export default SearchedPhotos;


