const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const vision = require('@google-cloud/vision');
var cors = require('cors');
// Creates a client
const client = new vision.ImageAnnotatorClient();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json())


let textDetected = [];
let scannedAmt = 0;

app.get('/receipt-amount', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  let response = {
    "amount": 0
  }
  client
    .textDetection('../img/receipt.jpg')
    .then(results => {
      const detections = results[0].textAnnotations.slice(1);
      detections.forEach(text => {
        if (!isNaN(parseInt(text.description))) {
            scannedAmt = text.description; // gets the last number on receipt
        }
      });
      response.amount = scannedAmt;
      res.send(response)
    })
    .catch(err => {
      console.error('ERROR:', err);
    });



})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});