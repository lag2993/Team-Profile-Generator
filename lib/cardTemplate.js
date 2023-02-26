function createCards(teamMembers){

    function ManagerCard(Manager){

       return `
       <div class = "card">
        <div class = "card-header">
            <h2 class =  "card-name">${Manager.getName()}</h2>
            <h3 class = "card-role">${Manager.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul>
            <li class = "card-id"> ID: ${Manager.getId()}</li>
            <li class = "card-email"> Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
            <li class = "card-unique"> Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
       </div>  
       `; 
    }
    function EngineerCard(Engineer){

        return `
        <div class = "card">
         <div class = "card-header">
             <h2 class =  "card-name">${Engineer.getName()}</h2>
             <h3 class = "card-role">${Engineer.getRole()}</h3>
         </div>
         <div class = "card-body">
             <ul>
             <li class = "card-id"> ID: ${Engineer.getId()}</li>
             <li class = "card-email"> Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
             <li class = "card-unique"> Github URL: <a href="https://github.com/${Engineer.getGithub()}">  https://github.com/${Engineer.getGithub()}</a></li>
             </ul>
         </div>
        </div>  
        `; 
     }
     function InternCard(Intern){

        return `
        <div class = "card">
         <div class = "card-header">
             <h2 class =  "card-name">${Intern.getName()}</h2>
             <h3 class = "card-role">${Intern.getRole()}</h3>
         </div>
         <div class = "card-body">
             <ul>
             <li class = "card-id"> ID: ${Intern.getId()}</li>
             <li class = "card-email"> Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
             <li class = "card-unique"> School: ${Intern.getSchool()}</li>
             </ul>
         </div>
        </div>  
        `; 
     }
     const htmlAdd = [];
     for(let i =0;i<teamMembers.length;i++){
        if(teamMembers[i].getRole()=== "Manager"){
            let temp = ManagerCard(teamMembers[i]);
            htmlAdd.push(temp);
        }else if(teamMembers[i].getRole()=== "Engineer"){
            let temp = EngineerCard(teamMembers[i]);
            htmlAdd.push(temp);
     }else if(teamMembers[i].getRole()=== "Intern"){
        let temp = InternCard(teamMembers[i]);
        htmlAdd.push(temp);
     }
    }

    return htmlAdd.join("");
}

module.exports = teamMembers => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
    </head>
  <body>
    <div class= "container-fluid">
        <div>
            <h1 class = "text">My Team</h1>
        </div>
    </div>
    
    <div class = "container">
        <div class = "row">
            <div class= "team-cards">
            ${createCards(teamMembers)}
            </div>
        </div>
    </div>

  </body>
  </html>
    `
}