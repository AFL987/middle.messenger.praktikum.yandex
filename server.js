const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
