const express = require('express');
const path = require('path');
var request = require('request');
var json;
var nba = require('nba');

const PORT = process.env.PORT || 3002;
const INDEX = path.join(__dirname, 'index.html');

function jsonParse(body) {
  var json;

  try {
    json = JSON.parse(body);
  } catch (e)  {
    json = body;
  }

  return json;
}

function handleRequest(req, res){
  request("http://stats.nba.com/stats/commonallplayers/?LeagueID=00&Season=2012-13&IsOnlyCurrentSeason=0&callback=playerinfocallback", function(error, response, body) {
    json = jsonParse(body);
    console.log(json);
    res.end('It works! Here is the data dump: ' + json);
  })
}

const server = express()
  .use((req, res) => handleRequest(req, res) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));



