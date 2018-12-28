import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const Container = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: "50%",
})

const NextButton = styled.button({
  backgroundImage: "url(http://static.birgun.net/static/images/slider-arrow-right.svg)",
  backgroundSize: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  height: 30,
  width: 30,
  borderRadius: 4,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  outline: "none",
  transition: "all 0.2s linear",
})

const PrevButton = styled.button({
  backgroundImage: "url(http://static.birgun.net/static/images/slider-arrow-left.svg)",
  backgroundSize: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  height: 30,
  width: 30,
  borderRadius: 4,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  outline: "none",
  transition: "all 0.2s linear",
})

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

ButtonWrapper.propTypes = {
  images: PropTypes.object.isRequired,
};

// Specifies the default values for props:
ButtonWrapper.defaultProps = {
  images: {
    id: 0
  },
};

export default ButtonWrapper;
