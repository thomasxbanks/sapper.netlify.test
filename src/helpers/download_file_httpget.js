// Dependencies
var fs = require('fs');
var url = require('url');
var http = require('http');

var DOWNLOAD_DIR = 'static/uploads/';

// Function for downloading file using HTTP.get
const download_file_httpget = function(file_url) {
  var options = {
    host: url.parse(file_url).host,
    port: 80,
    path: url.parse(file_url).pathname
  };

  var file_name = [...new Set(url.parse(file_url).pathname.split('/'))].filter(Boolean).pop().toLowerCase();
  var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

  http.get(options, function(res) {
    res.on('data', function(data) {
      file.write(data);
    }).on('end', function() {
      file.end();
      console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });
  });
};

module.exports = download_file_httpget;