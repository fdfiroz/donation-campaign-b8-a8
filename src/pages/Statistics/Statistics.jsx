import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [donated, setDonated] = useState([]);
  const data = useLoaderData()
  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donated"));
    if(donatedItem){
      setDonated(donatedItem);
    }
  }, []);
  
  const totalDonation = data.reduce((total, donation) => total + donation.price, 0);
  const donatedAmount = donated.reduce((total, donation) => total + donation.price, 0);
  // present totalDonation and donatedAmount in pie chart
  const remainTotal = totalDonation - donatedAmount
  const remainPercent = (remainTotal / totalDonation) * 100
  const donatedPercent = (donatedAmount / totalDonation) * 100
  const remainPercentFixed = parseFloat(remainPercent.toFixed(2))
  const donatedPercentFixed = parseFloat(donatedPercent.toFixed(2))
  const pieChartData = [
    { name: 'Total Donation', value: remainPercentFixed },
    { name: 'Donated Amount', value: donatedPercentFixed },
  ];

  const COLORS = ['#FF4349', '#00C49F'];


  
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
    <Legend
    iconType='plainline'
    iconSize={40}
    
    ></Legend>
  </PieChart>
      </ResponsiveContainer>
  
  );
};

export default Statistics;
