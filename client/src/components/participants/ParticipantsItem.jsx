import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const ParticipantsItem = ({ participant }) => {
    return (
        <li className="collection-item">
            <div>
                <span className="grey-text">
                    <span className="black-text">{participant.name}</span>
                </span>
            </div>
        </li>
    );
};

ParticipantsItem.propTypes = {
    participant: PropTypes.object.isRequired,
};

export default connect(null)(ParticipantsItem);
