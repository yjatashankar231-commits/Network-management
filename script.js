window.onload = function () {

  // Dashboard Counts
  const installationCount = document.getElementById("installationCount");
  const srCount = document.getElementById("srCount");
  const travelCount = document.getElementById("travelCount");

  if (installationCount) {
    installationCount.innerHTML = localStorage.getItem("installation") || 0;
  }

  if (srCount) {
    srCount.innerHTML = localStorage.getItem("sr") || 0;
  }

  if (travelCount) {
    travelCount.innerHTML =
      (localStorage.getItem("travel") || 0) + " KM";
  }

  // Current Date
  const currentDate = document.getElementById("current-date");
  if (currentDate) {
    currentDate.innerHTML = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }

};