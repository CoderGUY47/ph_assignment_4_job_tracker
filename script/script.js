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

let jobs = [...dummyJobs]; //"..." use spread operator to take everything from dummyJobs and put it in the new array
let currentTabIndex = "all";
const jobListContainer = document.getElementById("job-list-container");
const mainCard = document.querySelector(".job-card");
//step-1: update jobs function
function updateJobs() {
  jobListContainer.innerHTML = "";
  const filteredJobs = jobs.filter(
    (job) => currentTabIndex === "all" || job.status === currentTabIndex,
  );

  //step-3: Update the stats on the screen using machine helper
  updateStatsTab({
    total: jobs.length,
    applied: jobs.filter((job) => job.status === "applied").length,
    interview: jobs.filter((job) => job.status === "interview").length,
    rejected: jobs.filter((job) => job.status === "rejected").length,
    filtered: filteredJobs.length,
  });

  //step-4: Check if any jobs are available using machine helper
  isNoJobs(filteredJobs.length === 0);

  //step-5: loop through filtered jobs and append them
  filteredJobs.forEach(function (job) {
    const newCard = newJobCard(job, mainCard);
    jobListContainer.appendChild(newCard); //use last child of the parent and the parent of this is job-list-container
  });
}

//step-6: switch tab within the 3 tabs
function switchTab(newTab) {
  currentTabIndex = newTab;
  updateTab(newTab); // Using machine helper for tab UI
}

//step-7: logic build for job status by using their set Id
const updateJobStatus = (clickedId, newStatus) => {
  jobs = jobs.map((job) => {
    if (job.id === clickedId) {
      job.status = newStatus; //if match, then change it to interview or rejected
      job.appliedStatus = newStatus.toUpperCase(); //change to uppercase
      return job;
    } else {
      return job;
    }
  });
};

//step-8: logic build for delete job card
function deleteJob(id) {
  if (currentTabIndex === "all") {
    //when tab is in the All tab, then delete the job from the jobs array
    let newJobList = []; // jobs = jobs.filter((job) => job.id !== id);
    for (const job of jobs) {
      if (job.id !== id) {
        newJobList.push(job); // only keep the job that is not equal to the id
      }
    }
    jobs = newJobList;
  } else {
    //when tab is in the Interview or Rejected tab, then change the status of the job to all
    jobs = jobs.map((job) => {
      if (job.id === id) {
        job.status = "all";
        job.appliedStatus = "NOT APPLIED";
      }
      return job;
    });
  }
}

// listen to all click on the entire webpage
document.addEventListener("click", (event) => {
  // check if they clicked a button, a status card, or anything interactive
  if (
    event.target.closest("button") ||
    event.target.closest(".status-card") ||
    event.target.closest(".btn-tab")
  ) {
    // we use setTimeout so it waits for your normal functions (like deleteJob) to finish changing the data FIRST, before it redraws the screen!
    setTimeout(() => {
      updateJobs();
    }, 0);
  }
});

// Draw the first 8 jobs when the website first loads
updateJobs();
