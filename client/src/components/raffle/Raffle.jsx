import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import M from 'materialize-css/dist/js/materialize.min.js';
import ShuffleText from 'shuffle-text/build/shuffle-text.js';

// Actions
import { getWinner, setShow } from './../../state/actions/winnerAction';

const Raffle = ({
	getWinner,
	setShow,
	winnerState: { winner, error, show },
}) => {
	const wRef = useRef(null);
	useEffect(() => {
		if (error) {
			M.toast({ html: error.msg });
		}

		if (show) {
			const text = new ShuffleText(wRef.current);
			text.start();
		}
	}, [winner, error, show]);

	return (
		<div id="raffle" className="valign-wrapper">
			<div className="name">
				<h1 className="center-align">
					<p ref={wRef} style={{ fontSize: '6.5rem' }}>
						{winner !== null ? winner.toUpperCase() : 'Raffle'}
					</p>
				</h1>
				<div className="valign center">
					<a
						className="waves-effect waves-light btn"
						onClick={() => {
							setShow();
							getWinner();
						}}
					>
						Pick a Winner
					</a>
				</div>
			</div>
		</div>
	);
};

Raffle.propTypes = {
	winnerState: PropTypes.object.isRequired,
	getWinner: PropTypes.func.isRequired,
	setShow: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	winnerState: state.winnerState,
});

export default connect(mapStateToProps, { getWinner, setShow })(Raffle);
