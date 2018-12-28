import React from "react";
import styled from "@emotion/styled";

const Container = styled.div({
  position: "relative",
})

const IndicatorWrapper = styled.ul({
  zIndex: 2,
  padding: 0,
  margin: 0,
  position: "absolute",
  top: "-40px",
  left: "50%",
})

const Indicate = styled.li`
display: inline-block;
margin-right: 5px;
width: 12px;
height: 12px;
font-size: 16px;
line-height: 30px;
border-radius: 100%;
text-align: center;
background-color: rgba(255, 255, 255, 0.8);
color: #333;
text-indent: -9999px;
cursor: pointer;
transition: all 0.2s linear;

${({ setActiveIndicator }) => setActiveIndicator && `
background: rgba(0, 0, 0, 0.3);
color: red;
`}

    &:last-child {
      margin-right: 0;
    }
}`

class Indicator extends React.Component {
  render() {
    const { slider, activeIndex, onClickIndicator } = this.props;
    return (
      <Container>
        <IndicatorWrapper>
          {slider.map((item, index) =>
            <Indicate
              key={index}
              setActiveIndicator={index + 1 === activeIndex}
              onClick={() => onClickIndicator(index + 1)}
            />
          )
          }
        </IndicatorWrapper>
      </Container>
    );
  }
}

export default Indicator;
