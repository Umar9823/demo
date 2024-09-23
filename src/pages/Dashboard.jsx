import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  ScatterController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Radar, Scatter } from 'react-chartjs-2';


// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  ScatterController,
  Title,
  Tooltip,
  Legend
);

// Demo data for charts
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const lineData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Revenue',
      data: [65, 59, 80, 81, 56],
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const linearScaleData = {
  labels: ['Min', 'Mid', 'Max'],
  datasets: [
    {
      label: 'Linear Scale',
      data: [5, 10, 15],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
  ],
};

const radarData = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [
    {
      label: 'Performance',
      data: [120, 130, 180, 140, 150],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

// Interpolation Modes data for Scatter chart
const interpolationData = {
  labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
  datasets: [
    {
      label: 'Interpolation',
      data: [
        { x: 1, y: 3 },
        { x: 2, y: 6 },
        { x: 3, y: 9 },
        { x: 4, y: 12 },
        { x: 5, y: 15 },
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

// Delay chart data
const delayData = {
  labels: ['Delay 1', 'Delay 2', 'Delay 3', 'Delay 4', 'Delay 5'],
  datasets: [
    {
      label: 'Delay',
      data: [4, 7, 2, 9, 5],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
  ],
};

// Demo data for table
const tableData = [
  { id: 1, name: 'Product A', sales: 120, revenue: '$1500' },
  { id: 2, name: 'Product B', sales: 90, revenue: '$1200' },
  { id: 3, name: 'Product C', sales: 150, revenue: '$2000' },
];

// Animation options
const animationOptions = {
  animation: {
    duration: 1500, // Animation duration in milliseconds
    easing: 'easeInOutQuad', // Animation easing function
    delay: 300, // Delay before starting the animation
  },
};

const Dashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      
      {/* Grid for Charts */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Sales Bar Chart</h2>
          <Bar data={barData} options={animationOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Revenue Line Chart</h2>
          <Line data={lineData} options={animationOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Linear Scale Bar Chart</h2>
          <Bar data={linearScaleData} options={{
            ...animationOptions,
            scales: {
              y: {
                min: 0,
                max: 20,
                title: {
                  display: true,
                  text: 'Value'
                }
              }
            }
          }} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Performance Radar Chart</h2>
          <Radar data={radarData} options={animationOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Interpolation Modes Chart</h2>
          <Scatter data={interpolationData} options={animationOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Delay Chart</h2>
          <Bar data={delayData} options={animationOptions} />
        </div>
      </div>

      {/* Table for demo data */}
      <div className="mt-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Product Sales Table</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Sales</th>
              <th className="px-4 py-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.sales}</td>
                <td className="border px-4 py-2">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
