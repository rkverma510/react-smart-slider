import React from 'react';

class ButtonWrapper extends React.Component {
	render() {
		const { onPrevClick, onNextClick } = this.props;
		return (
			<div className="buttonWrapperContainer">
				<button className="prevButton" onClick={() => onPrevClick()}></button>
				<button className="nextButton" onClick={() => onNextClick()}></button>
			</div>
		);
	}
}

export default ButtonWrapper;
