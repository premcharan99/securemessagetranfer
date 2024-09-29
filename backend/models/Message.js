// backend/models/Message.js
const connection = require('../config/db');

const saveMessage = (message, code, callback) => {
    const query = 'INSERT INTO messages (message, code) VALUES (?, ?)';
    connection.execute(query, [message, code], (err, result) => {
        if (err) {
            console.error('Error saving message:', err.message);
            return callback(err, null);
        }
        callback(null, result);
    });
};

const getMessageByCode = (code, callback) => {
    const query = 'SELECT message FROM messages WHERE code = ?';
    connection.execute(query, [code], (err, result) => {
        if (err) {
            console.error('Error retrieving message:', err.message);
            return callback(err, null);
        }
        callback(null, result);
    });
};

module.exports = { saveMessage, getMessageByCode };
