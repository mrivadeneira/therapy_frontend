const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('client/build'));
app.get('*', (req, res) => {
    const myPath = path.resolve(__dirname, 'client', 'build', 'index.html')
    return res.sendFile(myPath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on the port ${PORT}`));