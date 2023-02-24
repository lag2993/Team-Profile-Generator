const BaseInfo = require('./BaseInfo');

class Engnr extends BaseInfo{
    constructor(name,empId,email,githubUrl){
        super(name,empId,email);
        this.githubUrl = githubUrl;
    }

    whatsRole(){
        return "Engineer";
    }

    whatsGithubUrl(){
        return this.githubUrl;
    }
}

module.exports = Engnr;