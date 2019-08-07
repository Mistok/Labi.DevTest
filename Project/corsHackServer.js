const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000;
const request = require('request');
const app = express();

// adding headers

app.use(cors());

app.get('/user',function (req, res) {
    let user = req.query.username;
    console.log(`Query parameter is ${user}`);

    request(`https://www.pinterest.com/${user}/feed.rss/`, function (error, response, body) {
        console.log('ss');
        if (!error && response.statusCode == 200) {
            console.log(response.body);
             res.body = body;

        }   else {
            console.log('error')
        }
    });
    res.send(res.body);
});
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
});