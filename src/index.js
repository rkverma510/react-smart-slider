import React from 'react';
import PropTypes from 'prop-types';
import Slide from './components/slide';
import Indicator from './components/indicator';
import ButtonWrapper from './components/button-wrapper';
import '../public/styles.css';

const AUTO_SLIDE_INTERVAL = 3000;


class SmartSlider extends React.Component {
	constructor(props) {
		super(props);
		this.imageContainerRef = React.createRef();
		this.state = ({
			activeIndex: 1,
			translateX: 0,
			currentTouchX: 0,
			startSwipe: false,
		});
	}

	componentDidMount = () => {
		const { autoSlide, autoSlideInterval } = this.props;
		const autoSlideIntVal = autoSlideInterval && autoSlideInterval >= AUTO_SLIDE_INTERVAL ?
			autoSlideInterval :
			AUTO_SLIDE_INTERVAL;
		this.timer = autoSlide ?
			setInterval(() => this.nextSlide(), autoSlideIntVal) :
			null;
	}

	componentWillUnmount = () => {
		clearInterval(this.timer);
	}

	prevSlide = () => {
		const { activeIndex } = this.state;
		const { slides } = this.props;
		const { offsetWidth } = this.imageContainerRef;
		if (activeIndex === 1) {
			const newIndex = activeIndex + slides.length - 1;
			this.setState({
				activeIndex: newIndex,
				translateX: (newIndex - 1) * offsetWidth,
			});
		} else {
			const newIndex = activeIndex - 1;
			this.setState({
				activeIndex: newIndex,
				translateX: (newIndex - 1) * offsetWidth,
			});
		}
	}

	nextSlide = () => {
		const { activeIndex, translateX } = this.state;
		const { slides } = this.props;
		if (activeIndex === slides.length) {
			this.setState({
				activeIndex: activeIndex - slides.length + 1,
				translateX: 0,
			});
		} else {
			const { offsetWidth } = this.imageContainerRef;
			this.setState({
				translateX: translateX + offsetWidth,
				activeIndex: activeIndex + 1,
			});
		}
	}

	onWrapperMouseDown = (e) => {
		e.preventDefault();
		this.setState({
			startTouchX: e.clientX,
			startSwipe: true,
		});
	};

	onWrapperMouseUp = (e) => {
		this.setState({ startSwipe: false });
		const touchRelativeX = this.state.startTouchX - e.clientX;
		const { offsetWidth } = this.imageContainerRef;

		// When the user swipes to 0.25 of the next item
		const threshold = 0.25;

		const noOfItemsToSwipe = Math.floor(Math.abs(touchRelativeX) / (offsetWidth) + (1 - threshold));

		if (noOfItemsToSwipe > 0) {
			if (touchRelativeX < 0) {
				this.prevSlide();
			} else {
				this.nextSlide();
			}
		}

		this.setState({ startTouchX: 0, currentTouchX: 0 });
	};


	onWrapperMouseMove = (e) => {
		if (this.state.startSwipe) {
			const { startTouchX } = this.state;
			this.setState({ currentTouchX: ((startTouchX - e.clientX) * -1) });
		}
	}

	autoSlide() {
		const { activeIndex } = this.state;
		const { slides } = this.props;
		this.setState({
			activeIndex: activeIndex < slides.length ? activeIndex + 1 : 1,
		});
	}

	render() {
		const { activeIndex, translateX, currentTouchX } = this.state;
		const { slides, showIndicator, height, buttonShape } = this.props;

		return (
			<div className="mainContainer">
				<div className="slideContainer" style={{
					minHeight: (window.innerWidth > 450) ? 450 : window.innerHeight / 3,
				}}>
					<div className="slidesHolder" style={{
						height,
						transitionDuration: currentTouchX ? '0s' : '0.5s',
						transform: `translateX(${(translateX - currentTouchX) * -1}px)`,
					}}
					onMouseDown={this.onWrapperMouseDown}
					onMouseUp={this.onWrapperMouseUp}
					onMouseMove={this.onWrapperMouseMove}
					ref={(node) => {
						this.imageContainerRef = node;
					}}
					>
						{slides.map((item, index) => <Slide
							key={index}
							currentIndex={index}
							activeIndex={activeIndex}
							item={item}
						/>)
						}
					</div>
				</div>
				<ButtonWrapper
					shape={buttonShape}
					onPrevClick={() => this.prevSlide()}
					onNextClick={() => this.nextSlide()} />
				{showIndicator && <Indicator
					slider={slides}
					activeIndex={activeIndex}
				/>}
			</div>
		);
	}
}

SmartSlider.propTypes = {
	slides: PropTypes.array.isRequired,
	showIndicator: PropTypes.bool,
	autoSlide: PropTypes.bool,
	height: PropTypes.number,
	childrenElem: PropTypes.any,
	autoSlideInterval: PropTypes.number,
	buttonShape: PropTypes.string,
};

// Specifies the default values for props:
SmartSlider.defaultProps = {
	slides: [{
		childrenElem: false,
		url: 'https://i.imgur.com/ehKbQ0F.jpg',
	},
	{
		childrenElem: false,
		url: 'https://i.imgur.com/t2a1zLi.jpg',
	},
	{
		childrenElem: false,
		url: 'https://i.imgur.com/e1aY1E5.jpg',
	}],
	showIndicator: true,
	autoSlide: false,
	autoSlideInterval: AUTO_SLIDE_INTERVAL,
	height: 500,
	childrenElem: false,
	buttonShape: 'square',
};

export default SmartSlider;
