import React from 'react';

const Enemy = ({ enemy }) => {
	return (
		<div>
			Enemy info:
			<div>Name: {enemy.name}</div>
			<div>HP:{`${enemy.hp}/${enemy.maxHp}`}</div>
			<div>{enemy.attack}</div>
			<div>{enemy.def}</div>
		</div>
	);
};

export default Enemy;
