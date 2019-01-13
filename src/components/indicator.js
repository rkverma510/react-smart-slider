import React from 'react';

class Indicator extends React.Component {
	render() {
		const { slider, activeIndex, onClickIndicator } = this.props;
		return (
			<div className="indicatorContainer">
				<ul className="indicatorWrapperUl">
					{slider.map((item, index) => <li key={index}
						className="indicate"
						style={
							(index + 1 === activeIndex) ?
								{
									background: 'rgba(0, 0, 0, 0.3)',
								} :
								{}
						}
						onClick={() => onClickIndicator(index + 1)}
					/>)
					}
				</ul>
			</div>
		);
	}
}

export default Indicator;
