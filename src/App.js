import React from 'react';
import './App.css';
import styled from 'styled-components';
import PexelState from './context/PexelState';
import Navbar from './components/Navbar';

//Import Search Components
import SearchPhoto from './components/SearchPhoto';
import SearchVideo from './components/SearchVideo';
import GetRandomPhoto from './components/GetRandomPhoto';


import SearchedPhotos from './components/SearchedPhotos';



const OptionContainer = styled.div`
	border: 3px solid blue;
	border-radius: 12px;
	padding: 50px;
	display: inline-block;
	margin: 35px 10px auto auto;
	
	
	
`



const App = () => {
	return (
		<PexelState>
			<Navbar />
			<div className="App">
			
				<div>
					<OptionContainer>
						<SearchPhoto />
					</OptionContainer>
					
					<OptionContainer >
						<SearchVideo/>
					</OptionContainer>
					
					<OptionContainer>
						<GetRandomPhoto />
					</OptionContainer>
				</div>
				
				<SearchedPhotos />
			</div>
		</PexelState>
	);
}

export default App;
