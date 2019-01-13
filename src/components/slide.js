import React from 'react';

class Slide extends React.Component {
	render() {
		const { currentIndex, activeIndex, item } = this.props;
		return (
			<li className="slideList" style={
				{
					background: `url(${item.url}) no-repeat`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					opacity: (currentIndex + 1 === activeIndex) ? 1 : 0,
				}
			}>
				<p className="slideCaption">{item.title}</p>
			</li>
		);
	}
}

export default Slide;
