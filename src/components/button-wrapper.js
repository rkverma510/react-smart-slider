import React from 'react'

const ButtonWrapper = ({ onPrevClick, onNextClick, shape }) => (
	<div className={`${shape === 'round' ? 'round buttonWrapperContainer' : 'buttonWrapperContainer'}`}>
		<button className="prevButton" onClick={() => onPrevClick()}></button>
		<button className="nextButton" onClick={() => onNextClick()}></button>
	</div>
)

export default ButtonWrapper