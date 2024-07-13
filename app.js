// app.js
const express = require('express');
const app = express();
const port = 80

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Candy store app listening at http://localhost:${port}`);
});
