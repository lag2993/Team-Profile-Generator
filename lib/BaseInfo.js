class BaseInfo{
    constructor(name,empId,email){
        this.name = name;
        this.empId = empId;
        this.email = email;
    }

    whatsName(){
        return this.name;
    }

    whatsEmpId(){
        return this.empId
    }
    whatsEmail(){
        return this.email;
    }
}

module.exports = BaseInfo;