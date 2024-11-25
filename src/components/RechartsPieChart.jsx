// FILE: RechartsPieChart.jsx

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { prepareData } from './chart-utils';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const RechartsPieChart = ({ data }) => {
    const preparedData = prepareData(data)

    return (
        <PieChart width={450} height={450}>
            <Pie
                data={preparedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={80}
                fill="#8884d8"
                label
            >
                {preparedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default RechartsPieChart;