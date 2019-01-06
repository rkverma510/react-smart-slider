import React from 'react';
import styled from '@emotion/styled';

const SlideList = styled.li`
  width: 100%;
  outline: 0;
  border: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  line-height: 0.2;
  display: none;
  transition: all 0.2s linear;

  ${({ showSlide, url }) => showSlide && `
    background: url(${url}) no-repeat;
    background-size: cover;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
`;

const SlideCaption = styled.p({
	color: '#fff',
	textTransform: 'uppercase',
	fontSize: '1.8em',
	position: 'absolute',
	top: '45%',
	left: 0,
	right: 0,
});

class Slide extends React.Component {
	render() {
		const { currentIndex, activeIndex, item } = this.props;
		return (
			<SlideList showSlide={currentIndex + 1 === activeIndex} url={item.url}>
				<SlideCaption>{item.title}</SlideCaption>
			</SlideList>
		);
	}
}

export default Slide;
