import React from 'react';

class Slide extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<div className="slideList">
				<div className="slideContent" style={{ background: `url(${item.url}) no-repeat center`, backgroundSize: 'cover' }}>
					{
						!!item.childrenElem && React.cloneElement(item.childrenElem)
					}
				</div>
			</div>
		);
	}
}

export default Slide;
