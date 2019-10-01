import React, { useContext } from 'react';
import PexelContext from '../../context/PexelContext';
import Video from './Video';

const SearchedVideos = () => {
	const pexelContext = useContext(PexelContext);
	const { videos } = pexelContext;
	
	return (
		<>
			<div className="media-grid">
				{videos.map(video => (
					<Video 
						key={video.id} 
						video={video} 
					/>
				))}
			</div>
		</>
	)
	
}

export default SearchedVideos;