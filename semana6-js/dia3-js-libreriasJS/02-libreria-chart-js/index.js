const ctx = document.getElementById("myChart");

new Chart(ctx, {
     //escribir en el chart lo que se quiere crear como "line"doughnut
  type: "bar",
//los datos de nuestro dataset
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# Pedidos",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
          label: "# Cancelaciones",
          data: [10, 12, 5, 3, 8, 6],
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
