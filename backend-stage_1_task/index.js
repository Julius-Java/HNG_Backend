const app = require('express')();
const data = require('./data.js')
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
        res.status(200).json(data)
});

app.listen(PORT, () => console.log('API running live'))