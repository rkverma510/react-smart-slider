import React from 'react';

class ButtonWrapper extends React.Component {
	render() {
		const { onPrevClick, onNextClick, shape } = this.props;
		return (
			<div className={`${shape === 'round' ? 'round buttonWrapperContainer' : 'buttonWrapperContainer'}`}>
				<button className="prevButton" onClick={() => onPrevClick()}></button>
				<button className="nextButton" onClick={() => onNextClick()}></button>
			</div>
		);
	}
}

export default ButtonWrapper;
