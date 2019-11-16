import {
	FIGHT_IS_STARTED,
	FIGHT_HAS_ERRORED,
	FIGHT_IS_END,
	CHANGE_VAMP_HP,
	CHANGE_ENEMY_HP
} from '../constants/';

export const startFight = () => {
	return {
		type: FIGHT_IS_STARTED
	};
};

export const endFight = () => {
	return {
		type: FIGHT_IS_END
	};
};

export const errorFight = (error) => {
	return {
		type: FIGHT_HAS_ERRORED,
		error: error
	};
};

export const changeVampHp = (hp) => {
	return {
		type: CHANGE_VAMP_HP,
		hp
	};
};
export const changeEnemyHp = (hp) => {
	return {
		type: CHANGE_ENEMY_HP,
		hp
	};
};

export const attack = (vamp, enemy) => {
	return function(dispatch) {
		console.log('Start attack');
		let turn = 0;
		let winner = '';
		const interval = setInterval(() => {
			if (vamp.hp >= 0 && enemy.hp >= 0) {
				turn = turn + 1;
				vamp.hp = vamp.hp - (enemy.attack - vamp.def);
				dispatch(changeVampHp(vamp.hp));
				enemy.hp = enemy.hp - (vamp.attack - enemy.def);
				dispatch(changeEnemyHp(enemy.hp));
				if (vamp.hp < 0) {
					winner = 'enemy';
				} else if (enemy.hp < 0) {
					winner = 'vamp';
				}
				console.log(
					`Turn: ${turn} - [ Vamp hp: ${vamp.hp} ], [ Enemy hp: ${enemy.hp} ]`
				);
			} else {
				clearInterval(interval);
				console.log('End fight, winner:', winner);
				dispatch(endFight());
			}
		}, 1000);
	};
};

export const fight = (vamp, enemy) => {
	return function(dispatch) {
		console.log('Start fight');
		dispatch(startFight());
		dispatch(attack(vamp, enemy));
	};
};
