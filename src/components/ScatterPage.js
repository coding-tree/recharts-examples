import React from 'react';
import {CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis} from 'recharts';

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

const ScatterPage = () => {
  return (
    <div className="container">
      {/* SCATTER CHART */}
      <ResponsiveContainer className="recharts__container">
        <ScatterChart margin={{top: 20, right: 20, bottom: 10, left: 10}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" name="User" />
          <YAxis dataKey="totalScore" name="Total Score" unit="p" />
          <ZAxis dataKey="amountOfMeetings" range={[0, 500]} name="Amount of Meetings" />
          <Tooltip cursor={{strokeDasharray: '3 3'}} />
          <Legend />
          <Scatter name="Coding Tree" data={data} fill="#44bbaa" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterPage;
