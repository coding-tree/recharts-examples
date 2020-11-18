import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';

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

const LinePage = () => {
  return (
    <div className="container">
      {/* LINE CHART */}
      <ResponsiveContainer className="recharts__container">
        <LineChart data={data}>
          <CartesianGrid stroke="#0f1021" />
          <Line type="monotone" dataKey="amountOfMeetings" stroke="#f23557" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amountOfMeetings" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinePage;
