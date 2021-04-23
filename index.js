/* global Chart */

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
    vue_watchers = response.data.subscribers_count;
    vue_forks = response.data.forks_count;
    vue_value = (vue_forks * 60) / 100 + (vue_stars * 30) / 100 + (vue_watchers * 10) / 100;
  });
  axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
    angular_stars = response.data.stargazers_count;
    angular_watchers = response.data.subscribers_count;
    angular_forks = response.data.forks_count;
    angular_value = (angular_forks * 60) / 100 + (angular_stars * 30) / 100 + (angular_watchers * 10) / 100;
  });
  axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
    ember_stars = response.data.stargazers_count;
    ember_watchers = response.data.subscribers_count;
    ember_forks = response.data.forks_count;
    ember_value = (ember_forks * 60) / 100 + (ember_stars * 30) / 100 + (ember_watchers * 10) / 100;
  });
  axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
    svelte_stars = response.data.stargazers_count;
    svelte_watchers = response.data.subscribers_count;
    svelte_forks = response.data.forks_count;
    svelte_value = (svelte_forks * 60) / 100 + (svelte_stars * 30) / 100 + (svelte_watchers * 10) / 100;
  });
  axios.get("https://api.github.com/repos/facebook/react").then((response) => {
    react_stars = response.data.stargazers_count;
    react_watchers = response.data.subscribers_count;
    react_forks = response.data.forks_count;
    react_value = (react_forks * 60) / 100 + (react_stars * 30) / 100 + (react_watchers * 10) / 100;
  });
}

function drawCharts() {
  var stars = document.getElementById("stars").getContext("2d");
  var stars_graph = new Chart(stars, {
    type: "bar",
    data: {
      labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
      datasets: [
        {
          label: "Stars",
          data: [vue_stars, angular_stars, ember_stars, svelte_stars, react_stars],
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
  var watchers = document.getElementById("watchers").getContext("2d");
  var watchers_graph = new Chart(watchers, {
    type: "bar",
    data: {
      labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
      datasets: [
        {
          label: "Watchers",
          data: [vue_watchers, angular_watchers, ember_watchers, svelte_watchers, react_watchers],
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
  var forks = document.getElementById("forks").getContext("2d");
  var forks_graph = new Chart(forks, {
    type: "bar",
    data: {
      labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
      datasets: [
        {
          label: "Forks",
          data: [vue_forks, angular_forks, ember_forks, svelte_forks, react_forks],
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
  var overall = document.getElementById("overall").getContext("2d");
  console.log(vue_value, angular_value, ember_value, svelte_value, react_value);
  var overall_graph = new Chart(overall, {
    type: "doughnut",
    data: {
      labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
      datasets: [
        {
          label: "Overall Popularity",
          data: [vue_value, angular_value, ember_value, svelte_value, react_value],
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
          hoverOffset: 4,
        },
      ],
    },
    options: {},
  });
}

getData();
waitFor((_) => react_stars).then((_) => drawCharts());
