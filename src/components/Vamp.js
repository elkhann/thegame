import React from 'react';

const Vamp = ({ vamp }) => {
	return (
		<div>
			Vamp info:
			<div>Name: {vamp.name}</div>
			<div>HP:{`${vamp.hp}/${vamp.maxHp}`}</div>
			<div>{vamp.attack}</div>
			<div>{vamp.def}</div>
		</div>
	);
};

export default Vamp;
