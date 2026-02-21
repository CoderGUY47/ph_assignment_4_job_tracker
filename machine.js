console.log("This is machine.js file"); 

function createJobCard(jobData, masterCard){
    const newCard = masterCard.cloneNode(true);
    newCard.querySelector(".company-name").textContent = jobData.company;
    newCard.querySelector(".job-position").textContent = jobData.position;
    newCard.querySelector(".job-location").textContent = jobData.location;
    newCard.querySelector(".job-type").textContent = jobData.type;
    newCard.querySelector(".job-salary").textContent = jobData.salary;
    newCard.querySelector(".job-description").textContent = jobData.description;
    newCard.querySelector(".job-status-badge").textContent = jobData.appliedStatus;
    return newCard;
}