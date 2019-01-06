import React from 'react';
import styled from '@emotion/styled';
import rightSvg from '../../public/images/slider-arrow-right.svg';
import leftSvg from '../../public/images/slider-arrow-left.svg';

const Container = styled.div({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	position: 'absolute',
	top: '50%',
});

const NextButton = styled.button({
	backgroundImage: `url(${rightSvg})`,
	backgroundSize: '100%',
	backgroundColor: 'rgba(241, 226, 226, 0.2)',
	height: 30,
	width: 30,
	borderRadius: 4,
	color: '#fff',
	border: 'none',
	cursor: 'pointer',
	outline: 'none',
	transition: 'all 0.2s linear',
});

const PrevButton = styled.button({
	backgroundImage: `url(${leftSvg})`,
	backgroundSize: '100%',
	backgroundColor: 'rgba(241, 226, 226, 0.2)',
	height: 30,
	width: 30,
	borderRadius: 4,
	color: '#fff',
	border: 'none',
	cursor: 'pointer',
	outline: 'none',
	transition: 'all 0.2s linear',
});

class ButtonWrapper extends React.Component {
	render() {
		const { onPrevClick, onNextClick } = this.props;
		return (
			<Container>
				<PrevButton onClick={() => onPrevClick()} />
				<NextButton onClick={() => onNextClick()} />
			</Container>
		);
	}
}

export default ButtonWrapper;
