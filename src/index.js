import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Slide from './components/slide';
import Indicator from './components/indicator';
import ButtonWrapper from './components/button-wrapper';
import '../public/styles.css';

const AUTO_SLIDE_INTERVAL = 3000;

const SmartSlider = ({
	autoSlide, autoSlideInterval,
	slides, showIndicator, height, buttonShape
}) => {
	let imageContainerRef = useRef()
	let timer = null

	const [allSlides, setSlides] = useState(slides)

	const [stateObj, setStateObj] = useState({
		activeIndex: 1,
		translateX: 0,
		currentTouchX: 0,
		startSwipe: false
	})

	const handleStateObj = (newState) => setStateObj((prevState) => ({
		...prevState,
		...newState
	}))

	const nextSlide = () => {
		const { activeIndex, translateX } = stateObj
		if (activeIndex === slides.length) {
			handleStateObj({
				activeIndex: activeIndex - slides.length + 1,
				translateX: 0
			});
		} else {
			const { offsetWidth } = imageContainerRef;
			handleStateObj({
				translateX: translateX + offsetWidth,
				activeIndex: activeIndex + 1
			})

			// HINT: Will implement it later
			setSlides((prevState) => ([
				...prevState.slice(1),
				...allSlides.slice(0, 1)
			]))
		}
	}

	useEffect(() => {
		// Initiate the event handler
		const autoSlideIntVal = autoSlideInterval && autoSlideInterval >= AUTO_SLIDE_INTERVAL ?
			autoSlideInterval :
			AUTO_SLIDE_INTERVAL;
		timer = autoSlide ?
			setInterval(() => nextSlide(), autoSlideIntVal) :
			null;

		// This will clean up the event every time the component is re-rendered
		return function cleanup() {
			clearInterval(timer)
		}
	})

	const prevSlide = () => {
		const { activeIndex } = stateObj;
		const { offsetWidth } = imageContainerRef;
		if (activeIndex === 1) {
			const newIndex = activeIndex + slides.length - 1;
			handleStateObj({
				activeIndex: newIndex,
				translateX: (newIndex - 1) * offsetWidth
			});
		} else {
			const newIndex = activeIndex - 1;
			handleStateObj({
				activeIndex: newIndex,
				translateX: (newIndex - 1) * offsetWidth
			});
		}
	}

	const onWrapperMouseDown = (e) => {
		e.preventDefault();
		handleStateObj({
			startTouchX: e.clientX,
			startSwipe: true
		});
	};

	const onWrapperMouseUp = (e) => {
		handleStateObj({ startSwipe: false });
		const touchRelativeX = stateObj.startTouchX - e.clientX;
		const { offsetWidth } = imageContainerRef;

		// When the user swipes to 0.25 of the next item
		const threshold = 0.25;

		const noOfItemsToSwipe = Math.floor(Math.abs(touchRelativeX) / (offsetWidth) + (1 - threshold));

		if (noOfItemsToSwipe > 0) {
			if (touchRelativeX < 0) {
				prevSlide();
			} else {
				nextSlide();
			}
		}

		handleStateObj({ startTouchX: 0, currentTouchX: 0 });
	};

	const onWrapperMouseMove = (e) => {
		if (stateObj.startSwipe) {
			const { startTouchX } = stateObj;
			handleStateObj({ currentTouchX: ((startTouchX - e.clientX) * -1) });
		}
	}

	const { activeIndex, translateX, currentTouchX } = stateObj;

	return (
		<div className="mainContainer">
			<div className="slideContainer" style={{
				minHeight: (window.innerWidth > 450) ? 450 : window.innerHeight / 3
			}}>
				<div className="slidesHolder"
					onMouseDown={onWrapperMouseDown}
					onMouseUp={onWrapperMouseUp}
					onMouseMove={onWrapperMouseMove}
					ref={(node) => { imageContainerRef = node }}
					style={{
						height,
						transitionDuration: currentTouchX ? '0s' : '0.5s',
						transform: `translate3d(${(translateX - currentTouchX) * -1}px, 0, 0)`
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
				onPrevClick={() => prevSlide()}
				onNextClick={() => nextSlide()} />
			{showIndicator && <Indicator
				slider={slides}
				activeIndex={activeIndex}
			/>}
		</div>
	)
}

SmartSlider.propTypes = {
	slides: PropTypes.array.isRequired,
	showIndicator: PropTypes.bool,
	autoSlide: PropTypes.bool,
	height: PropTypes.number,
	childrenElem: PropTypes.any,
	autoSlideInterval: PropTypes.number,
	buttonShape: PropTypes.string
};

// Specifies the default values for props:
SmartSlider.defaultProps = {
	slides: [{
		childrenElem: false,
		url: 'https://i.imgur.com/ehKbQ0F.jpg'
	},
	{
		childrenElem: false,
		url: 'https://i.imgur.com/t2a1zLi.jpg'
	},
	{
		childrenElem: false,
		url: 'https://i.imgur.com/e1aY1E5.jpg'
	}],
	showIndicator: true,
	autoSlide: false,
	autoSlideInterval: AUTO_SLIDE_INTERVAL,
	height: 500,
	childrenElem: false,
	buttonShape: 'square'
};

export default SmartSlider