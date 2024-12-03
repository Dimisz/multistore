const express = require("express");
const PORT = 4000;
const router = require('./routes/hello');

const app = express();
app.use(router);

app.listen(PORT, () => console.log(`starting server on port ${PORT}...`));