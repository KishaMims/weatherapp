const express = require('express');
const cors = require('cors');
const { request } = require('http');
const app = express();
const PORT = 8080;
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

//const https = require("https");
//const apiKey = '21f7d721b2e75e13933f61ef9b712c18'; 
//const zipcode = //

//const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=35020,us&appid=21f7d721b2e75e13933f61ef9b712c18&units=imperial&cnt=5';
//`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=21f7d721b2e75e13933f61ef9b712c18&units=imperial&cnt=5`

const makeUrl = (zipCode) => {
    return `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=21f7d721b2e75e13933f61ef9b712c18&units=imperial&`
}

app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log('Received GET request...');
});


app.get('/forecast', cors(), (req, res) => {
    const zipCode = req.query.zip;
    console.log(zipCode);
    console.log(makeUrl(zipCode));
    fetch(makeUrl(zipCode))
    .then(res => { return res.json(); })
    .then(data => {
      console.log("data from fetch:", data)
     res.json(data);
})
  .catch(err => {
    res.redirect('/error')
  });

});


app.listen(PORT,console.log(
    `Server started on port ${PORT}`));
