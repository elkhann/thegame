import React from 'react';
import { connect } from 'react-redux';
// import {} from '../store/actions';

import Enemy from '../components/Enemy';

const EnemyContainer = ({ vamp, enemy }) => {
	return (
		<div>
			<Enemy enemy={enemy} vamp={vamp} />
		</div>
	);
};

const mapStateToProps = ({ vamp, enemy }) => {
	return { vamp, enemy };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(EnemyContainer);
