import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addParticipant } from '../../state/actions/participantAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddParticipantModal = ({
	addParticipant,
	participantState: { error },
}) => {
	const initialInfo = {
		name: '',
	};

	const [info, setInfo] = useState(initialInfo);

	const { name } = info;

	const onChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (name === '') {
			M.toast({ html: 'Please enter participant name' });
		} else {
			const newParticipant = {
				name,
			};

			addParticipant(newParticipant);

			setInfo(initialInfo);
		}
	};

	useEffect(() => {
		if (error) {
			M.toast({ html: error.msg });
		}
	}, [error]);

	return (
		<div id='add-log-modal' className='modal' style={modalStyle}>
			<form onSubmit={onSubmit}>
				<div className='modal-content'>
					<h4>Enter Participant Name</h4>
					<div className='row'>
						<div className='col s12'>
							<div className='input-field'>
								<input
									type='text'
									name='name'
									onChange={onChange}
									value={name}
								/>
								<label htmlFor='name' className='active'>
									Name
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='modal-footer'>
					<button
						type='submit'
						className='modal-close waves-effect blue waves-light btn'
					>
						Enter
					</button>
				</div>
			</form>
		</div>
	);
};

AddParticipantModal.propTypes = {
	addParticipant: PropTypes.func.isRequired,
	participantState: PropTypes.object.isRequired,
};

const modalStyle = {
	width: '75%',
	height: '75%',
};

const mapStateToProps = (state) => ({
	participantState: state.participantState,
});

export default connect(mapStateToProps, { addParticipant })(
	AddParticipantModal
);
