import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Slide from "./components/slide";
import Indicator from "./components/indicator";
import ButtonWrapper from "./components/button-wrapper";

const MainContainer = styled.div({
  position: "relative",
})

const Container = styled.div({
  overflow: "hidden",
  minHeight: (window.innerWidth > 450) ? 450 : window.innerHeight / 3,
  border: "1px solid #333",
})

const SlideContainer = styled.ul({
})

class SmartSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      activeIndex: 1,
    })
  }

  componentDidMount() {
    const { autoSlide, autoSlideInterval } = this.props;
    this.timer = autoSlide ?
      setInterval(this.autoSlide.bind(this), autoSlideInterval) :
      null;
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  prevSlide() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    this.setState({
      activeIndex: activeIndex - 1,
    })
    if (activeIndex === 1) {
      this.setState({
        activeIndex: activeIndex + slides.length - 1,
      })
    }
  }

  nextSlide() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    this.setState({
      activeIndex: activeIndex + 1,
    })
    if (activeIndex === slides.length) {
      this.setState({
        activeIndex: activeIndex - slides.length + 1,
      })
    }
  }

  clickIndicator(index) {
    this.setState({
      activeIndex: index,
    })
  }

  autoSlide() {
    const { activeIndex } = this.state;
    const { slides } = this.props;
    this.setState({
      activeIndex: activeIndex < slides.length ? activeIndex + 1 : 1
    })
  }

  render() {
    const { activeIndex } = this.state;
    const { slides, showIndicator } = this.props;

    return (
      <MainContainer>
        <Container>
          <SlideContainer>
            {slides.map((item, index) =>
              <Slide
                key={index}
                currentIndex={index}
                activeIndex={activeIndex}
                item={item}
              />
            )}
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
    title: "Original Image 1",
    url: "https://www.pixelstalk.net/wp-content/uploads/images2/Halloween-wallpaper-1080p-1920x1080.jpg",
  },
  {
    title: "Original Image 2",
    url: "https://newevolutiondesigns.com/images/freebies/hd-wallpaper-37.jpg",
  },
  {
    title: "Original Image 3",
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-hd-wallpapers-3d-free.jpg",
  }],
  showIndicator: true,
  autoSlide: false,
  autoSlideInterval: 3000,
};

export default SmartSlider;
