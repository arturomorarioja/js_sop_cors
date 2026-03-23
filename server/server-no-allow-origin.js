// There is no Access-Control-Allow-Origin header

import express from 'express';
const app = express();

// Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/data', (req, res) => {
    res.json({ secret: 'TOP_SECRET' });
});

app.listen(9000, () => {
    console.log('API running on http://localhost:9000');
});