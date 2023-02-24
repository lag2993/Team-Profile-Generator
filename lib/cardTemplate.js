function createCards(teamMembers){

    function MngrCard(Mngr){

       return `
       <div class = "card">
        <div class = "card-header">
            <h2 class =  "card-name">${Mngr.whatsName()}</h2>
            <h3 class = "card-role">${Mngr.whatsRole()}</h3>
        </div>
        <div class = "card-body">
            <ul>
            <li class = "card-empId"> ID: ${Mngr.whatsEmpId()}</li>
            <li class = "card-email"> Email: <a href="mailto:${Mngr.whatsEmail()}">${Mngr.whatsEmail()}</a></li>
            <li class = "card-unique"> Office Number: ${Mngr.whatsOfficeNumber()}</li>
            </ul>
        </div>
       </div>  
       `; 
    }
    function EngnrCard(Engnr){

        return `
        <div class = "card">
         <div class = "card-header">
             <h2 class =  "card-name">${Engnr.whatsName()}</h2>
             <h3 class = "card-role">${Engnr.whatsRole()}</h3>
         </div>
         <div class = "card-body">
             <ul>
             <li class = "card-empId"> ID: ${Engnr.whatsEmpId()}</li>
             <li class = "card-email"> Email: <a href="mailto:${Engnr.whatsEmail()}">${Engnr.whatsEmail()}</a></li>
             <li class = "card-unique"> Github URL: <a href="${Engnr.whatsGithubUrl()}">  ${Engnr.whatsGithubUrl()}</a></li>
             </ul>
         </div>
        </div>  
        `; 
     }
     function IntrnCard(Intrn){

        return `
        <div class = "card">
         <div class = "card-header">
             <h2 class =  "card-name">${Intrn.whatsName()}</h2>
             <h3 class = "card-role">${Intrn.whatsRole()}</h3>
         </div>
         <div class = "card-body">
             <ul>
             <li class = "card-empId"> ID: ${Intrn.whatsEmpId()}</li>
             <li class = "card-email"> Email: <a href="mailto:${Intrn.whatsEmail()}">${Intrn.whatsEmail()}</a></li>
             <li class = "card-unique"> Office Number: ${Intrn.whatsSchool()}</li>
             </ul>
         </div>
        </div>  
        `; 
     }
     const htmlAdd = [];
     for(let i =0;i<teamMembers.length;i++){
        if(teamMembers[i].whatsRole()=== "Manager"){
            let temp = MngrCard(teamMembers[i]);
            htmlAdd.push(temp);
        }else if(teamMembers[i].whatsRole()=== "Engineer"){
            let temp = EngnrCard(teamMembers[i]);
            htmlAdd.push(temp);
     }else if(teamMembers[i].whatsRole()=== "Intern"){
        let temp = IntrnCard(teamMembers[i]);
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
        <link rel="stylesheet" href="./styles.css" />
        <title>My Team</title>
    </head>
  <body>
    <div class= "container-fluid">
        <div class = "row">
            <h1 class = "text-center">My Team</h1>
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