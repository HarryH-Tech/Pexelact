import React, {useState, useContext } from 'react';
import PexelContext from '../context/PexelContext';


const Search = () => {
	const pexelContext = useContext(PexelContext);
	const [query, setQuery] = useState('');
	
	const onSubmit = (e) => {
		e.preventDefault();
		if(query === '') {
			alert("Please enter something to search for :)");
		}
		else {
			pexelContext.searchPhotos(query);
		}
	}
	
	const handleSearchInput = (e) => {
		setQuery(e.target.value);
	}
	
	return (
		<>
		<div className="card">
				<form onSubmit={onSubmit}>
					<input 
						type="text"
						value={query}
						onChange={handleSearchInput}
						autoFocus
					/>
					<br />
					<br />
					<input
						type="submit"
						value="Search Photo"
					/>
				</form>
		</div>
		</>
	)
}

export default Search;