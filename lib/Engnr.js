const BaseInfo = require('./BaseInfo');

class Engineer extends BaseInfo{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;