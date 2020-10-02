import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { getParticipants } from './../../state/actions/participantAction';

// Components
import PreLoader from './../layouts/Preloader';
import ParticipantsItem from './ParticipantsItem';

const Participants = ({
	getParticipants,
	participantState: { participants, loading },
}) => {
	useEffect(() => {
		getParticipants();
		// eslint-disable-next-line
	}, []);

	if (loading || participants === null) {
		return <PreLoader />;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>Participants</h4>
			</li>
			{!loading && participants.length === 0 ? (
				<p className='center'>No participants to show...</p>
			) : (
				participants.map((participant, index) => (
					<ParticipantsItem participant={participant} key={index} />
				))
			)}
		</ul>
	);
};

Participants.propTypes = {
	participantState: PropTypes.object.isRequired,
	getParticipants: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	participantState: state.participantState,
});

export default connect(mapStateToProps, { getParticipants })(Participants);
