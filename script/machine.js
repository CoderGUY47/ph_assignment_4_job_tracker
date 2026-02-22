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

  const statusButtons = ["applied", "interview", "rejected"];
  statusButtons.forEach((status) => {
    newCard
      .querySelector(`.${status}-btn`)
      .addEventListener("click", function () {
        updateJobStatus(jobData.id, status);
      });
  });

  const badgeSelectors = [
    ".job-status-badge",
    ".applied-status-badge",
    ".interview-status-badge",
    ".rejected-status-badge",
  ];
  badgeSelectors.forEach((selector) => {
    newCard.querySelector(selector).classList.add("hidden");
  });

  const activeSelector =
    jobData.status === "all"
      ? ".job-status-badge"
      : `.${jobData.status}-status-badge`;
  const activeBadge = newCard.querySelector(activeSelector);
  activeBadge.classList.remove("hidden");
  activeBadge.textContent = jobData.appliedStatus;

  const statusStyles = {
    applied: "border-amber-500",
    interview: "border-green-500",
    rejected: "border-rose-500/60",
  };

  if (statusStyles[jobData.status]) {
    newCard.classList.remove("border-white/10");
    newCard.classList.add(
      "border-2",
      "border-dashed",
      statusStyles[jobData.status],
    );
  }

  const deleteBtn = newCard.querySelector("#delete-btn");
  deleteBtn.addEventListener("click", function () {
    deleteJob(jobData.id);
    console.log("delete button clicked", jobData.id);
  });

  return newCard;
}

function updateStatsTab(counts) {
  const mapping = { //map the hmtl id to the data from counts object
    "total-count": counts.total,
    "applied-count": counts.applied,
    "interview-count": counts.interview,
    "rejected-count": counts.rejected,
    "total-list-count": counts.filtered,
    "list-count": counts.total,
  };
  //update the job status counts
  Object.keys(mapping).forEach((id) => {
    document.getElementById(id).textContent = mapping[id];
  });
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
  const tabs = ["all", "applied", "interview", "rejected"];
  tabs.forEach((tabName) => {
    const statusTab = document.getElementById(`${tabName}-btn`);

    if (tabName === activeTab) {
      statusTab.classList.add("active");
    } else {
      statusTab.classList.remove("active");
    }
  });
}
