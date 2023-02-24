// Import required packages
const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

// Bring in classes
const Mngr = require('./lib/Mngr');
const Engnr =  require('./lib/Engnr');
const Intrn = require('./lib/Intrn');
const cardTmplt = require('./lib/cardTemplate');

let teamMembers = [];



// 
function teamInquire(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'MngrName',
            message:"What is the Manager's name?",
        },
        {
            type: 'input',
            name: 'MngrId',
            message:"What is the Manager's employee ID?",
        },
        {
            type: 'input',
            name: 'MngrEmail',
            message:"What is the Manager's email?",
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message:"What is the Manager's Office Number?",
        },
    ]).then((responses)=>{
        const teamMngr = new Mngr(
            responses.MngrName,
            responses.MngrId,
            responses.MngrEmail,
            responses.OfficeNumber
        );
        teamMembers.push(teamMngr);
        addAnother();

    })
}

function recruitEngnr(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'EngnrName',
            message:"What is the Engineer's name?",
        },
        {
            type: 'input',
            name: 'EngnrID',
            message:"What is the Engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'EngnrEmail',
            message:"What is the Engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message:"What is the link to the Engineer's github?",
        },
        
    ]).then((responses)=>{
        const teamEngnr = new Engnr(
            responses.EngnrName,
            responses.EngnrID,
            responses.EngnrEmail,
            responses.github
        );
        teamMembers.push(teamEngnr);
        addAnother();
    })
}

function recruitIntrn(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'IntrnName',
            message:"What is the Intern's name?",
        },
        {
            type: 'input',
            name: 'IntrnID',
            message:"What is the Interns's employee ID?",
        },
        {
            type: 'input',
            name: 'IntrnEmail',
            message:"What is the Intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message:"What school does the intern attend?",
        },
        
    ]).then((responses)=>{
        const teamIntrn = new Intrn(
            responses.IntrnName,
            responses.IntrnID,
            responses.IntrnEmail,
            responses.school
        );
        teamMembers.push(teamIntrn);
        addAnother();
    })
}

function addAnother(){
    inquirer.prompt([
        {
            type:'list',
            name:'chooseTeam',
            message: 'Would you like to add a team member?',
            choices: [
                'Engineer',
                'Intern',
                'No more team Members',
            ]
        }]).then((choice)=>{
            switch(choice.chooseTeam){
                case 'Engineer':
                    recruitEngnr();
                break;
                case 'Intern':
                    recruitIntrn();
                break;
                default:
                    createTeam();
            }
    
        })
}

function createTeam(){
    fs.writeFileSync(path.join(__dirname,'/gen','/team.html'),cardTmplt(teamMembers),'utf-8');
}
teamInquire();


