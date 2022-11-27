const express = require("express");
const fs = require('fs');
const app = express();
// const fs = require("fs");
// const path = require("path"); 
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    // const rstream = fs.createReadStream('text.txt');
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on('end', () => {
    //     res.end();
    // });
    const intervalid = setInterval(() => {
        const rstream = fs.createReadStream('Text_file.txt', 'utf-8');
        rstream.on('data', (chunkdata) => {
            // arr = chunkdata.split('\n');
            // temp = arr[arr.length - 1];
            let ch = JSON.stringify(chunkdata);
            console.log(ch);
            res.write(` ${chunkdata} `);

        });
    }, 1000);
    res.on('close', () => {
        console.log("changed");
        clearInterval(intervalid);
        res.end();
    })
});


app.listen(3000, err => {
    if (err) { console.log("server not running"); return }
    console.log("Server listening..");
})
