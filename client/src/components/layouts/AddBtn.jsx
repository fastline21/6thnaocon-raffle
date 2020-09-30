import React from 'react';

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a
                href="#add-log-modal"
                className="btn-floating btn-large blue darken-2 modal-trigger"
            >
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a
                        href="/winner"
                        className="btn-floating green modal-trigger"
                    >
                        <i className="material-icons">emoji_events</i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AddBtn;
