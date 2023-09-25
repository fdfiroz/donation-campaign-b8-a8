import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const [donated, setDonated] = useState([]);
  console.log(donated)
  const data = useLoaderData()
  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donated"));
    setDonated(donatedItem);
  }, []);
  
  const totalDonation = data.reduce((total, donation) => total + donation.price, 0);
  const donatedAmount = donated.reduce((total, donation) => total + donation.price, 0);

  const pieChartData = [
    { name: 'Total Donation', value: totalDonation },
    { name: 'Donated Amount', value: donatedAmount },
  ];

  const COLORS = ['#FF5733', '#33FF57'];


  
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieChartData}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Statistics;
