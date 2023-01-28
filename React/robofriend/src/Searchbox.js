import React from 'react';

const Searchbox = ({searchfield,searchchange}) =>{
	return (
		<div className = 'pa2'>
		<input className = "pa3 ba b--green bg-lightest-blue"
		type = 'search' 
		placeholder = 'search robot'
		onChange = {searchchange}
		/>
		</div>
	);
}

export default Searchbox