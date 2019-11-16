import { CHANGE_ENEMY_HP } from '../constants/';

const initialState = {
	name: 'EnemyVamp',
	maxHp: 100,
	hp: 70,
	attack: 10,
	def: 2
};

const enemy = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ENEMY_HP:
			const hp = action.hp >= 0 ? action.hp : 0;
			return { ...state, hp };
		default:
			return state;
	}
};

export default enemy;
