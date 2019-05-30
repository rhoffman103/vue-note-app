const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/notes', (req, res) => {
    res.send(
        [{
            title: 'My first Note!',
            body: 'Who likes short shorts?'
        }]
    )
})

app.listen(process.env.PORT || 8081);