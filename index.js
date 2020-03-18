const express = require('express');
const app = express();
const port = 3000;
const podName = process.env.POD_NAME;

app.get('/', (req, res) => res.send(`Hello from ${podName}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));