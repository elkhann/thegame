import React from 'react';
import { connect } from 'react-redux';
// import {} from '../store/actions';

import Vamp from '../components/Vamp';

const VampContainer = ({ vamp, enemy }) => {
	return (
		<div>
			<Vamp vamp={vamp} enemy={enemy} />
		</div>
	);
};

const mapStateToProps = ({ vamp, enemy }) => {
	return { vamp, enemy };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(VampContainer);
