import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const ageData = [
  { name: '10대', value: 25 },
  { name: '20대', value: 60 },
  { name: '30대', value: 40 },
  { name: '40대', value: 30 },
  { name: '50대', value: 15 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f0e', '#ff6b6b'];

function PieChartComponent() {
  return (
    <ChartWrapper>
      <div>
        <PieChart width={300} height={250}>
          <Pie dataKey="value" data={ageData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={(entry) => entry.name}>
            {ageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </ChartWrapper>
  );
}

export default PieChartComponent;
