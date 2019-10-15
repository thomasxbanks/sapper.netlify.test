// Dependencies
var fs = require('fs');
var url = require('url');
var http = require('http');

var DOWNLOAD_DIR = 'static/uploads';

// Function for downloading file using HTTP.get
const download_file_httpget = function (file_url, file_name, folder_name, document_type) {
  const options = {
    host: url.parse(file_url).host,
    port: 80,
    path: url.parse(file_url).pathname
  };
  const dir = `${DOWNLOAD_DIR}/${folder_name}/${document_type}`
  fs.mkdirSync(dir, {
    recursive: true
  }, err => {
    if (err) throw err
  })
  const file = fs.createWriteStream(dir + `/${file_name}`);
  console.log('download: $ ' + file_name)
  http.get(options, function (res) {
    res.on('data', function (data) {
      file.write(data);
    }).on('end', function () {
      file.end();
      console.log(file_name + ' downloaded to ' + dir);
    });
  });
 
};

module.exports = download_file_httpget;