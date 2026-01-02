import express from 'express';
const app = express();

app.get('/data', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5500')
    res.json({ secret: 'TOP_SECRET' });
});

app.listen(9001, () => {
    console.log('API running on http://localhost:9001');
});