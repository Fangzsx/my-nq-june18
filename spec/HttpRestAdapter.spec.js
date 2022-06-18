const HttpRestAdapter = require('../src/adapters/http/HttpRestAdapter');
const http = require('http')
const express = require("express");

describe('http rest adapter', () => {


    it('should request', function (done) {
        const httpAdapter = new HttpRestAdapter(http);
        const url = 'http://localhost/v1/classes/products'
        const options = {
            headers : {
                'X-Application-Id' : '6560588f36297abd70cb7433774d5e09',
                'Content-Type' : 'application/json',
                'X-Master-Key' : '43600a5f650ed69e3391ccdf271332d437f4026e'
            },
            method : 'POST',
            body : {
                username : 'test',
                password : 'asd'
            }
        }

        httpAdapter.request(url, options)
            .then((response) => {
                console.log(response);
                done();
            })
            .catch(done.fail)
    })
})