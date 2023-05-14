"use client";

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
import { useState } from "react";
import Chart from "react-google-charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface FormValues {
  name: string;
  email: string;
  phone: string;
  academy: string;
  group: string;
  numberOfMonths: string;
  participation: string;
  foodPreferences: string[];
  foodAllergies: string[];
  options?: string[];
}
const DashboardPage = () => {
  const [userData, setUserData] = useState<FormValues[]>([]);
  const [click, setClick] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-medium mb-4">Number of Applicants</h2>
          
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4">Other Statistics</h2>
         
        </div>
      </div>
      <button onClick={() => setClick(true)}>Generate Users</button>
    </div>
  );
};

export default DashboardPage;
