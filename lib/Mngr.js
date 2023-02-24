const BaseInfo = require('./BaseInfo');

class Mngr extends BaseInfo{
    constructor(name,empId,email,officeNumber){
        super(name,empId,email);
        this.officeNumber = officeNumber;
    }

    whatsRole(){
        return "Manager";
    }

    whatsOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Mngr;