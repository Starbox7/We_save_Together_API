import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const data = [
  { name: '서비스 가입자 수', count: 200 },
  { name: '캠페인 참가자 수', count: 150 },
  { name: '캠페인 수', count: 10 },
];

function barGraph() {
  return (
    <ChartContainer>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ChartContainer>
  );
}

export default barGraph;
