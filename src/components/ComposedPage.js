import React from 'react';
import {Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

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

const ComposedPage = () => {
  return (
    <div className="container">
      {/* Composed Chart */}
      <ResponsiveContainer className="recharts__container">
        <ComposedChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#aaaaaa" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="totalScore" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="amountOfMeetings" stroke="#ff7300" strokeWidth="5" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedPage;
