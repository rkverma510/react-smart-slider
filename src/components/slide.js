import React from 'react'

const Slide = ({ item }) => (
	<div className="slideList">
		<div className="slideContent" style={{ background: `url(${item.url}) no-repeat center`, backgroundSize: 'cover' }}>
			{
				!!item.childrenElem && React.cloneElement(item.childrenElem)
			}
		</div>
	</div>
)

export default Slide