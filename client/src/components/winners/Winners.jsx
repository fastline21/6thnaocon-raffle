import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { getWinners } from './../../state/actions/winnerAction';

// Components
import PreLoader from './../layouts/Preloader';

const Winners = ({ getWinners, winnerState: { winners, show } }) => {
	const [dateDraw, setDateDraw] = useState(
		new Date().toISOString().slice(0, 10)
	);
	useEffect(() => {
		getWinners();

		// eslint-disable-next-line
	}, []);

	const onChange = (e) => {
		const { value } = e.target;
		setDateDraw(value);
	};

	if (!show || winners === null) {
		return <PreLoader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">Winners</h4>
				<input
					type="date"
					className="datepicker"
					name="dateDraw"
					onChange={onChange}
					value={dateDraw}
				/>
			</li>
			{show && winners.length === 0 ? (
				<p className="center">No winner to show...</p>
			) : (
				winners.map((winner, index) => (
					<li className="collection-item" key={index}>
						<div>
							<span className="grey-text">
								<span className="black-text">
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
