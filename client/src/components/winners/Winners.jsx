import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { getWinners } from './../../state/actions/winnerAction';

// Components
import PreLoader from './../layouts/Preloader';

const Winners = ({ getWinners, winnerState: { winners, loading } }) => {
	useEffect(() => {
		getWinners();

		// eslint-disable-next-line
	}, []);

	if (loading || winners === null) {
		return <PreLoader />;
	}
	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>Winners</h4>
			</li>
			{!loading && winners.length === 0 ? (
				<p className='center'>No winner to show...</p>
			) : (
				winners.map((winner, index) => (
					<li className='collection-item' key={index}>
						<div>
							<span className='grey-text'>
								<span className='black-text'>
									{winner.name}
								</span>
							</span>
						</div>
					</li>
				))
			)}
		</ul>
	);
};

Winners.propTypes = {
	winnerState: PropTypes.object.isRequired,
	getWinners: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	winnerState: state.winnerState,
});

export default connect(mapStateToProps, { getWinners })(Winners);
