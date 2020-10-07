import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { clearWinners } from './../../state/actions/winnerAction';

const AddBtn = ({ clearWinners, winnerState: { date } }) => {
	const location = useLocation();
	const { pathname } = location;
	return (
		<div className="fixed-action-btn">
			{pathname.includes('participants') && (
				<Fragment>
					<a
						href="/"
						className="btn-floating btn-large blue darken-2 modal-trigger"
					>
						<i className="large material-icons">home</i>
					</a>
					<ul>
						<li>
							<a
								href="#add-log-modal"
								className="btn-floating amber modal-trigger"
							>
								<i className="large material-icons">add</i>
							</a>
						</li>
						<li>
							<a
								href="/winners"
								className="btn-floating green modal-trigger"
							>
								<i className="material-icons">emoji_events</i>
							</a>
						</li>
					</ul>
				</Fragment>
			)}
			{pathname.includes('winners') && (
				<Fragment>
					<a
						href="/"
						className="btn-floating btn-large blue darken-2 modal-trigger"
					>
						<i className="large material-icons">home</i>
					</a>
					<ul>
						<li>
							<button
								onClick={() => clearWinners(date)}
								className="btn-floating red modal-trigger"
							>
								<i className="material-icons">clear</i>
							</button>
						</li>
						<li>
							<a
								href="/participants"
								className="btn-floating green modal-trigger"
							>
								<i className="material-icons">group</i>
							</a>
						</li>
					</ul>
				</Fragment>
			)}
		</div>
	);
};

AddBtn.propTypes = {
	clearWinners: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	winnerState: state.winnerState,
});

export default connect(mapStateToProps, { clearWinners })(AddBtn);
