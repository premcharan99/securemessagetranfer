// backend/routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const { saveMessage, getMessageByCode } = require('../models/Message');

// Generate and store message
router.post('/generate', (req, res) => {
    const { message, code } = req.body;
    saveMessage(message, code, (err, result) => {
        if (err) {
            console.error('Error saving message:', err.message);
            return res.status(500).json({ error: 'Failed to save message' });
        }
        res.json({ success: true });
    });
});

// Retrieve message by code
router.get('/retrieve/:code', (req, res) => {
    const code = req.params.code;
    getMessageByCode(code, (err, result) => {
        if (err || result.length === 0) {
            console.error('Error retrieving message:', err ? err.message : 'No message found');
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json({ message: result[0].message });
    });
});

module.exports = router;
