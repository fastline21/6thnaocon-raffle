const express = require('express');
const router = express.Router();

// Models
const Participant = require('./../models/Participant');

// @route   GET /api/participant
// @desc    Display all participant
// @access  Public
router.get('/', async (req, res) => {
    const participant = await Participant.find();
    res.json(participant);
});

// @route   POST /api/participant
// @desc    Add participant
// @access  Public
router.post('/', async (req, res) => {
    const { name } = req.body;

    if (name === '') {
        return res
            .status(400)
            .json({ msg: 'Please fill in all the required fields' });
    } else {
        try {
            let participant = await Participant.findOne({ name });

            if (participant)
                return res.status(400).json({ msg: 'Participant exist' });

            const newParticipant = new Participant({ name });
            participant = await newParticipant.save();
            res.json(participant);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
});

// @route   PUT /api/participant/:id
// @desc    Update participant
// @access  Public
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        let participant = await Participant.findById(id);

        if (!participant)
            return res.status(404).json({ msg: 'Participant not found ' });

        participant = await Participant.findByIdAndUpdate(id, {
            $set: { name },
        });

        res.json(participant);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/participant/:id
// @desc    Remove participant
// @access  Public
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let participant = await Participant.findById(id);

        if (!participant)
            return res.status(404).json({ msg: 'Participant not found' });

        await Participant.findByIdAndRemove(id);

        res.json({ msg: 'Participant removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
