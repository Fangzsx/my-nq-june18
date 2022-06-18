class RestController{
    constructor(adapter) {
        this.adapter = adapter;
    }

    setDefaultHeaders(){
        //retrieve from global
        this.appId = 'some id';
        this.contentType = 'some type'
    }
    setUrl(path){
        //from global
        const base = 'get server url';
        return new URL(base + path);
    }

    writeHeaders(){
        this.headers = {};
        this.headers['Content-Type'] = this.contentType;
        this.headers['X-Application-Id'] = this.appId;
    }

    init(path){
        return Promise.resolve()
            .then(() => this.setDefaultHeaders())
            .then(() => this.writeHeaders())
            .then(() => this.setUrl(path))
    }






}
module.exports = RestController;