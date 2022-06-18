const express = require('express');
const http = require("http");

describe('NQ', function () {
    let server;
    const port = 80;
    beforeAll(done => {
        server = http.createServer(express())
        server.listen(port, () => {
            console.log(`server started with port ${port}`)
        })
        done();
    })
    afterAll(done => {
        server.close();
        console.log('server closed');
        done();
    })

    it('should initiate a test server', function (done){
        console.log('testing server');
        done();
    });
    it('should ')
});