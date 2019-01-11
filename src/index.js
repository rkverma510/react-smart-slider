import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Slide from './components/slide';
import Indicator from './components/indicator';
import ButtonWrapper from './components/button-wrapper';
import slideOne from '../public/images/slide-1.jpg';
import slideTwo from '../public/images/slide-2.jpg';
import slideThree from '../public/images/slide-3.jpg';

const AUTO_SLIDE_INTERVAL = 3000;

const MainContainer = styled.div({
	position: 'relative',
});

const Container = styled.div({
	overflow: 'hidden',
	minHeight: (window.innerWidth > 450) ? 450 : window.innerHeight / 3,
	border: '1px solid #333',
});

const SlideContainer = styled.ul({
});

class SmartSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			activeIndex: 1,
		});
	}

	componentDidMount() {
		const { autoSlide, autoSlideInterval } = this.props;
		const autoSlideIntVal = autoSlideInterval && autoSlideInterval >= AUTO_SLIDE_INTERVAL ?
			autoSlideInterval :
			AUTO_SLIDE_INTERVAL;
		this.timer = autoSlide ?
			setInterval(this.autoSlide.bind(this), autoSlideIntVal) :
			null;
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	prevSlide() {
		const { activeIndex } = this.state;
		const { slides } = this.props;

		this.setState({
			activeIndex: activeIndex - 1,
		});
		if (activeIndex === 1) {
			this.setState({
				activeIndex: activeIndex + slides.length - 1,
			});
		}
	}

	nextSlide() {
		const { activeIndex } = this.state;
		const { slides } = this.props;

		this.setState({
			activeIndex: activeIndex + 1,
		});
		if (activeIndex === slides.length) {
			this.setState({
				activeIndex: activeIndex - slides.length + 1,
			});
		}
	}

	clickIndicator(index) {
		this.setState({
			activeIndex: index,
		});
	}

	autoSlide() {
		const { activeIndex } = this.state;
		const { slides } = this.props;
		this.setState({
			activeIndex: activeIndex < slides.length ? activeIndex + 1 : 1,
		});
	}

	render() {
		const { activeIndex } = this.state;
		const { slides, showIndicator } = this.props;

		return (
			<MainContainer>
				<Container>
					<SlideContainer>
						{slides.map((item, index) => <Slide
							key={index}
							currentIndex={index}
							activeIndex={activeIndex}
							item={item}
						/>)
						}
					</SlideContainer>
				</Container>
				<ButtonWrapper
					onPrevClick={this.prevSlide.bind(this)}
					onNextClick={this.nextSlide.bind(this)} />
				{showIndicator && <Indicator
					slider={slides}
					activeIndex={activeIndex}
					onClickIndicator={this.clickIndicator.bind(this)}
				/>}
			</MainContainer>
		);
	}
}

SmartSlider.propTypes = {
	slides: PropTypes.array.isRequired,
	showIndicator: PropTypes.bool,
	autoSlide: PropTypes.bool,
	autoSlideInterval: PropTypes.number,
};

// Specifies the default values for props:
SmartSlider.defaultProps = {
	slides: [{
		title: 'Original Image 1',
		url: `${slideOne}`,
	},
	{
		title: 'Original Image 2',
		url: `${slideTwo}`,
	},
	{
		title: 'Original Image 3',
		url: `${slideThree}`,
	}],
	showIndicator: true,
	autoSlide: false,
	autoSlideInterval: AUTO_SLIDE_INTERVAL,
};

export default SmartSlider;
