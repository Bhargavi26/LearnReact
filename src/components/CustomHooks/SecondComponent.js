// Filename - First Component

import React from "react";

// importing the custom hook
import useCounter from "./useCounter";

function SecondComponent(props){

	// ClickedButton = resetCounter;
	const clickedButton = useCounter(0 , "FirstComponent"); 
	
	return (
		<div>
			<h1> This is the Second Component</h1>
			<button onClick={clickedButton}> 
				Click here!
			</button>
		</div>
	);
}

export default SecondComponent;
