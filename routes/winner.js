const express = require('express');
const router = express.Router();
const moment = require('moment');

// Models
const Participant = require('./../models/Participant');
const Winner = require('./../models/Winner');

// @route   GET /api/winner
// @desc    Display
// @access  Public
router.get('/', async (req, res) => {
	const { date } = req.query;
	const winner = await Winner.find({
		dateCreated: {
			$gte: date,
			$lte: moment(date).endOf('day').toDate(),
		},
	});
	res.json(winner);
});

// @route   POST /api/winner
// @desc    Add Winner
// @access  Public
router.post('/', async (req, res) => {
	const participant = await Participant.find();
	const countWinner = await Winner.find();
	if (participant.length === countWinner.length) {
		return res.status(400).json({ msg: 'No more participant' });
	} else {
		let winnerIndex = Math.floor(Math.random() * participant.length);
		let allWinner = await Winner.findOne({
			user: participant[winnerIndex]._id,
		});

		while (allWinner) {
			winnerIndex = Math.floor(Math.random() * participant.length);

			allWinner = await Winner.findOne({
				user: participant[winnerIndex],
			});
		}

		const winner = new Winner({
			user: participant[winnerIndex]._id,
			name: participant[winnerIndex].name,
		});
		await winner.save();
		res.json({ winner: winner.name });
	}
});

// @route   DELETE /api/winner
// @desc    Remove all winner
// @access  Public
router.delete('/', async (req, res) => {
	const { date } = req.query;
	await Winner.find({
		dateCreated: {
			$gte: date,
			$lte: moment(date).endOf('day').toDate(),
		},
	}).deleteMany();
	res.json({ msg: 'All winner removed' });
});

module.exports = router;
