const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Participant', ParticipantSchema);
