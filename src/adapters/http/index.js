const http = require('http');
const HttpRestAdapter = require('./HttpRestAdapter');

function getHttpRestAdapter(){
    return new HttpRestAdapter(http);
}
module.exports = getHttpRestAdapter;