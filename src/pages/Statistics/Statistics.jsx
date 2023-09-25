import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [donated, setDonated] = useState([]);
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
    
      <ResponsiveContainer width="100%" height={400}>
        
      <PieChart width={600} height={600}>
    <Pie
      data={pieChartData}
      cx="50%" 
      cy="50%"
      innerRadius={0}
      outerRadius={150}
      fill="#8884d8"
      paddingAngle={1}
      dataKey="value"
    >
      {pieChartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
      </ResponsiveContainer>
  
  );
};

export default Statistics;
