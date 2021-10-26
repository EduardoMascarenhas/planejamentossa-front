const express = require('express');
const compression = require('compression');
const cors = require("cors");
const path = require('path');
const app = express();
 
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

 
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 
const PORT = process.env.PORT || 80;
 
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});