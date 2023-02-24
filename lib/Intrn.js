const BaseInfo = require('./BaseInfo');

class Intrn extends BaseInfo{
    constructor(name,empId,email,school){
        super(name,empId,email);
        this.school = school;
    }

    whatsRole(){
        return "Engineer";
    }

    whatsSchool(){
        return this.school;
    }
}

module.exports = Intrn;