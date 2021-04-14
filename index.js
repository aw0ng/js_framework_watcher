/* global Chart */

// const { default: axios } = require("axios");

var vue_stars = 0;
var vue_watchers = 0;
var vue_forks = 0;
var angular_stars = 0;
var angular_watchers = 0;
var angular_forks = 0;
var ember_stars = 0;
var ember_watchers = 0;
var ember_forks = 0;
var svelte_stars = 0;
var svelte_watchers = 0;
var svelte_forks = 0;
var react_stars = 0;
var react_watchers = 0;
var react_forks = 0;

function waitFor(conditionFunction) {
  const poll = (resolve) => {
    if (conditionFunction()) resolve();
    else setTimeout((_) => poll(resolve), 400);
  };

  return new Promise(poll);
}

function getData() {
  axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
    vue_stars = response.data.stargazers_count;
    vue_watchers = response.data.watchers_count;
    vue_forks = response.data.forks_count;
  });
  axios
    .get("https://api.github.com/repos/angular/angular.js")
    .then((response) => {
      angular_stars = response.data.stargazers_count;
      angular_watchers = response.data.watchers_count;
      angular_forks = response.data.forks_count;
    });
  axios
    .get("https://api.github.com/repos/emberjs/ember.js")
    .then((response) => {
      ember_stars = response.data.stargazers_count;
      ember_watchers = response.data.watchers_count;
      ember_forks = response.data.forks_count;
    });
  axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
    svelte_stars = response.data.stargazers_count;
    svelte_watchers = response.data.watchers_count;
    svelte_forks = response.data.forks_count;
  });
  axios.get("https://api.github.com/repos/facebook/react").then((response) => {
    react_stars = response.data.stargazers_count;
    react_watchers = response.data.watchers_count;
    react_forks = response.data.forks_count;
  });
}

function drawCharts() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
      datasets: [
        {
          label: "# of Stars",
          data: [
            vue_stars,
            angular_stars,
            ember_stars,
            svelte_stars,
            react_stars,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

getData();
waitFor((_) => vue_stars).then((_) => drawCharts());
