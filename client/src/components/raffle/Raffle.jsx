import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import M from 'materialize-css/dist/js/materialize.min.js';

// Actions
import { getWinner } from './../../state/actions/winnerAction';

const Raffle = ({ getWinner, winnerState: { winner, error } }) => {
    const [showName, setShowName] = useState(false);

    useEffect(() => {
        if (error) {
            M.toast({ html: error.msg });
        }

        if (winner) {
            setShowName(true);
        }
    }, [winner, error]);
    return (
        <div id="raffle" className="valign-wrapper">
            <div className="name">
                <h1 className="center-align">
                    {winner !== null ? winner : 'Raffle'}
                </h1>
                <div className="valign center">
                    <a
                        className="waves-effect waves-light btn"
                        onClick={() => {
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
};

const mapStateToProps = (state) => ({
    winnerState: state.winnerState,
});

export default connect(mapStateToProps, { getWinner })(Raffle);
