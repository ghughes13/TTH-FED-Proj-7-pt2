let myChart = document.getElementById('myChart').getContext('2d');

let lineGraph = new Chart(myChart, {
  type="line",
  data: {
    labels:[],
    datasets:[]
  },
  options: {

  }
});
