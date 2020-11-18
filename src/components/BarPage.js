import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
  {
    name: 'Damian Ospara',
    amountOfMeetings: 17,
    totalScore: 20,
    color: '#aa99bb',
  },
  {
    name: 'Józef Rzadkosz',
    amountOfMeetings: 3,
    totalScore: 6,
    color: '#9933bb',
  },
  {
    name: 'Emil Sankowski',
    amountOfMeetings: 3,
    totalScore: 5,
    color: '#aa9999',
  },
  {
    name: 'Kazimierz Bagrowski',
    amountOfMeetings: 2,
    totalScore: 5,
    color: '#fa4bc3',
  },
  {
    name: 'Angelika Paterak',
    amountOfMeetings: 0,
    totalScore: 0,
    color: '#a66900',
  },
  {
    name: 'Paweł Wojtkiewicz',
    amountOfMeetings: 5,
    totalScore: 15,
    color: '#ffcc00',
  },
  {
    name: 'Jakub Wojtoń',
    amountOfMeetings: 7,
    totalScore: 2,
    color: '#ccaa99',
  },
];

const BarPage = () => {
  return (
    <div className="container">
      {/* BAR CHART VERTICAL */}
      <ResponsiveContainer className="recharts__container">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amountOfMeetings" fill="#ea9085" />
          <Bar dataKey="totalScore" fill="#d45d79" />
        </BarChart>
      </ResponsiveContainer>
      {/* BAR CHART HORIZONTAL */}
      <ResponsiveContainer className="recharts__container">
        <BarChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" interval="preserveStart" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="amountOfMeetings" fill="#ea9085" />
          <Bar dataKey="totalScore" fill="#d45d79" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarPage;
