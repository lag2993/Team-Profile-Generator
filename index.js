// Import required packages
const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

// Bring in classes
const Manager = require('./lib/Mngr');
const Engineer =  require('./lib/Engnr');
const Intern = require('./lib/Intrn');
const cardTmplt = require('./lib/cardTemplate');

let teamMembers = [];



// 
function teamInquire(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message:"What is the Manager's name?",
        },
        {
            type: 'input',
            name: 'ManagerId',
            message:"What is the Manager's employee ID?",
        },
        {
            type: 'input',
            name: 'ManagerEmail',
            message:"What is the Manager's email?",
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message:"What is the Manager's Office Number?",
        },
    ]).then((responses)=>{
        const teamManager = new Manager(
            responses.ManagerName,
            responses.ManagerId,
            responses.ManagerEmail,
            responses.OfficeNumber
        );
        teamMembers.push(teamManager);
        addAnother();

    })
}

function recruitEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'EngineerName',
            message:"What is the Engineer's name?",
        },
        {
            type: 'input',
            name: 'EngineerID',
            message:"What is the Engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'EngineerEmail',
            message:"What is the Engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message:"What is the username for the Engineer's github?",
        },
        
    ]).then((responses)=>{
        const teamEngineer = new Engineer(
            responses.EngineerName,
            responses.EngineerID,
            responses.EngineerEmail,
            responses.github
        );
        teamMembers.push(teamEngineer);
        addAnother();
    })
}

function recruitIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'InternName',
            message:"What is the Intern's name?",
        },
        {
            type: 'input',
            name: 'InternID',
            message:"What is the Interns's employee ID?",
        },
        {
            type: 'input',
            name: 'InternEmail',
            message:"What is the Intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message:"What school does the intern attend?",
        },
        
    ]).then((responses)=>{
        const teamIntern = new Intern(
            responses.InternName,
            responses.InternID,
            responses.InternEmail,
            responses.school
        );
        teamMembers.push(teamIntern);
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
                    recruitEngineer();
                break;
                case 'Intern':
                    recruitIntern();
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


