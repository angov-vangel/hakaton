import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const DashboardPage = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="flex flex-wrap">
      <div className=" sm:w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Number of Applicants</h2>
            <Bar data={data} options={options} />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4">Other Statistics</h2>
            {/* Add other statistics here */}
          </div>
        </div>
      </div>
      <div className=" sm:w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Number of Applicants</h2>
            <Bar data={data} options={options} />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4">Other Statistics</h2>
            {/* Add other statistics here */}
          </div>
        </div>
      </div>
      <div className=" sm:w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Number of Applicants</h2>
            <Bar data={data} options={options} />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4">Other Statistics</h2>
            {/* Add other statistics here */}
          </div>
        </div>
      </div>
      <div className=" sm:w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Number of Applicants</h2>
            <Bar data={data} options={options} />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4">Other Statistics</h2>
            {/* Add other statistics here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
