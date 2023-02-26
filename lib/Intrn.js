const BaseInfo = require('./BaseInfo');

class Intern extends BaseInfo{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;