const connection = require('../config/db');

const saveMessage = (message, code, callback) => {
    const query = 'INSERT INTO messages (message, code) VALUES (?, ?)';
    connection.execute(query, [message, code], callback);
};

const getMessageByCode = (code, callback) => {
    const query = 'SELECT message FROM messages WHERE code = ?';
    connection.execute(query, [code], callback);
};

module.exports = { saveMessage, getMessageByCode };
