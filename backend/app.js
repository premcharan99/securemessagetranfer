const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
