import React from 'react';
import { connect } from 'react-redux';
import { fight } from '../store/actions';

import Fight from '../components/Fight';

const FightContainer = ({ vamp, enemy, fight }) => {
	return (
		<div>
			<Fight vamp={vamp} enemy={enemy} fight={fight} />
		</div>
	);
};

const mapStateToProps = ({ vamp, enemy }) => {
	return { vamp, enemy };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fight: (vamp, enemy) => {
			dispatch(fight(vamp, enemy));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FightContainer);
