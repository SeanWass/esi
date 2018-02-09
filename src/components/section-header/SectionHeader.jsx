import React from 'react';

require('./styles.scss');

const SectionHeader = (props) => {
	return (
		<div className="sectionHeader">
			<h2>{props.title}</h2>

			{(props.showCTA) ? 
				<span onClick={props.handler}>{props.CTATitle}</span>
				: ''}
		</div>
	)
}

export default SectionHeader;