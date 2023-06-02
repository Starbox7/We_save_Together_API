import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'January', Visitors: 4000 },
  { name: 'February', Visitors: 3000 },
  { name: 'March', Visitors: 2000 },
  { name: 'April', Visitors: 2780 },
  { name: 'May', Visitors: 1890 },
  { name: 'June', Visitors: 2390 },
  { name: 'July', Visitors: 3490 },
];

const lineChart = () => (
  <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" dataKey="Visitors" stroke="#ff7300" yAxisId={0} />
  </LineChart>
);

export default lineChart;
