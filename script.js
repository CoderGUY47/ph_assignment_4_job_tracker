const dummyJobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    link: "#",
    salary: "$120,000 - $150,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all", // "all", "interview", "rejected"
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    link: "#",
    salary: "$90,000 - $110,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Austin, TX",
    type: "Full-time",
    link: "#",
    salary: "$110,000 - $140,000",
    description:
      "Transform complex data into compelling visual stories. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    link: "#",
    salary: "$130,000 - $160,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    link: "#",
    salary: "$125,000 - $155,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and front-end development expertise required.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    link: "#",
    salary: "$140,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development support sites.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    link: "#",
    salary: "$115,000 - $145,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "Boston, MA",
    type: "Full-time",
    link: "#",
    salary: "$150,000 - $180,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all",
    appliedStatus: "NOT APPLIED",
  },
];

let jobs = [...dummyJobs];
let currentTabIndex = "all";



const jobListContainer = document.getElementById("job-list-container");
const totalCount = document.getElementById("total-count");
const statusPanel = document.getElementById("status-panel");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const totalListCount = document.getElementById("total-list-count");
const listCount = document.getElementById("list-count");
const listContainer = document.getElementById("list-container");


//starting point for starting the web afer reloadiing 
function init(){
  updateJobs();
//updateStatusPanel();
  }

function updateJobs(){
  jobListContainer.innerHTML = "";
  
  const filteredJobs = jobs.filter(function(job){
    
  if(currentTabIndex === "all"){
    return true;
  }
  else if(job.status === currentTabIndex){
    return true;
  }
  else{
    return false;
  }
  });

  //get the main card design from html, and clone it, find it once doing it outside the loop
  const masterCard = document.querySelector(".job-card");
  //loop through the filtered jobs
  filteredJobs.forEach(function(job){
    const newCard = masterCard.cloneNode(true);
    newCard.querySelector(".company-name").textContent = job.company;
    newCard.querySelector(".job-position").textContent = job.position;
    newCard.querySelector(".job-location").textContent = job.location;
    newCard.querySelector(".job-type").textContent = job.type;
    newCard.querySelector(".job-salary").textContent = job.salary;
    newCard.querySelector(".job-description").textContent = job.description;
    newCard.querySelector(".job-status-badge").textContent = job.status;
    jobListContainer.appendChild(newCard);
  })
  
}
