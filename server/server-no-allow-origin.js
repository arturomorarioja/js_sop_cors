// There is no Access-Control-Allow-Origin header

import express from 'express';
const app = express();

app.get('/data', (req, res) => {
    res.json({ secret: 'TOP_SECRET' });
});

app.listen(9000, () => {
    console.log('API running on http://localhost:9000');
});