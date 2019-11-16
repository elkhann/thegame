import React from 'react';

const Fight = ({ vamp, enemy, fight }) => {
	const startFightHandle = () => {
		fight(vamp, enemy);
	};

	return (
		<div>
			<h1>Fight</h1>
			<button onClick={() => startFightHandle()}>Fight</button>
		</div>
	);
};

export default Fight;
