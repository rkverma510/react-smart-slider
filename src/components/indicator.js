import React from 'react'

const Indicator = ({ slider, activeIndex }) => (
	<div className="indicatorContainer">
		<ul className="indicatorWrapperUl">
			{slider.map((item, index) => <li key={index}
				className="indicate"
				style={
					(index + 1 === activeIndex) ?
						{
							background: 'rgba(0, 0, 0, 0.3)'
						} :
						{}
				}
			/>)
			}
		</ul>
	</div>
)

export default Indicator