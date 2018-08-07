'use strict'

const API_ROUTE = '/api'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// cargar rutas
var user_routes = require('./routes/user');
var artist_routes = require('./routes/artist');
var album_routes = require('./routes/album');
var song_routes = require('./routes/song');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origen", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

//rutas base
app.use(API_ROUTE, user_routes);
app.use(API_ROUTE, artist_routes);
app.use(API_ROUTE, album_routes);
app.use(API_ROUTE, song_routes);

module.exports = app;
