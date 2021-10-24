const express = require('express');
const cors = require('cors');

//* invocamos express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
    console.log("topmai service running");

});