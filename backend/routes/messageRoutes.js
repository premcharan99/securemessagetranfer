const express = require('express');
const router = express.Router();
const { saveMessage, getMessageByCode } = require('../models/Message');

// Generate and store message
router.post('/generate', (req, res) => {
    const { message, code } = req.body;
    saveMessage(message, code, (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to save message' });
        res.json({ success: true });
    });
});

// Retrieve message by code
router.get('/retrieve/:code', (req, res) => {
    const code = req.params.code;
    getMessageByCode(code, (err, result) => {
        if (err || result.length === 0) return res.status(404).json({ error: 'Message not found' });
        res.json({ message: result[0].message });
    });
});

module.exports = router;
