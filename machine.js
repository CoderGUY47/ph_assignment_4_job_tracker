console.log("This is machine.js file");

//step-2: card creation function
function newJobCard(jobData, mainCard) {
  const newCard = mainCard.cloneNode(true);
  newCard.querySelector(".company-name").textContent = jobData.company;
  newCard.querySelector(".job-position").textContent = jobData.position;
  newCard.querySelector(".job-location").textContent = jobData.location;
  newCard.querySelector(".job-type").textContent = jobData.type;
  newCard.querySelector(".job-salary").textContent = jobData.salary;
  newCard.querySelector(".job-description").textContent = jobData.description;

  const interviewBtn = newCard.querySelector(".interview-btn");
  interviewBtn.addEventListener("click", function () {
    updateJobStatus(jobData.id, "interview");
  });

  const rejectedBtn = newCard.querySelector(".rejected-btn");
  rejectedBtn.addEventListener("click", function () {
    updateJobStatus(jobData.id, "rejected");
  });

  const statusBadge = newCard.querySelector(".job-status-badge");
  const interviewBadge = newCard.querySelector(".interview-status-badge");
  const rejectedBadge = newCard.querySelector(".rejected-status-badge");

  //first hide this badges
  statusBadge.classList.add("hidden");
  interviewBadge.classList.add("hidden");
  rejectedBadge.classList.add("hidden");

  //show the badge when clicked with the correct one
  if (jobData.status === "interview") {
    interviewBadge.classList.remove("hidden");
    interviewBadge.textContent = jobData.appliedStatus;
  } else if (jobData.status === "rejected") {
    rejectedBadge.classList.remove("hidden");
    rejectedBadge.textContent = jobData.appliedStatus;
  } else {
    statusBadge.classList.remove("hidden");
    statusBadge.textContent = jobData.appliedStatus;
  }

  //step-9: logic build for delete job card
  const deleteBtn = newCard.querySelector("#delete-btn");
  deleteBtn.addEventListener("click", function () {
    deleteJob(jobData.id);
    console.log("delete button clicked", jobData.id);
  });

  return newCard;
}

function updateStatsTab(counts) {
  document.getElementById("total-count").textContent = counts.total;
  document.getElementById("interview-count").textContent = counts.interview;
  document.getElementById("rejected-count").textContent = counts.rejected;
  document.getElementById("total-list-count").textContent = counts.filtered;
  document.getElementById("list-count").textContent = counts.total;
}

function isNoJobs(isShown) {
  const noJobsCard = document.getElementById("no-jobs-card");
  if (isShown) {
    noJobsCard.classList.remove("hidden"); //show panel
  } else {
    noJobsCard.classList.add("hidden"); //hide panel
  }
}

function updateTab(activeTab) {
  const tabs = ["all", "interview", "rejected"];
  tabs.forEach((tabName) => { // target every element with these 3 id's

    const statusTab = document.getElementById(`${tabName}-btn`);
    tabs.forEach((tabElement) => {
      if (tabName === activeTab) { //check if the current tab is the clicked one
        statusTab.classList.add("active");
      }
      else {
        statusTab.classList.remove("active");
      }
    });
  });
}
