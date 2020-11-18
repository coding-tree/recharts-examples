import React from 'react';
import {Area, AreaChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

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

const AreaPage = () => {
  return (
    <div className="container">
      {/* AREA CHART */}
      <ResponsiveContainer className="recharts__container">
        <AreaChart data={data} layout="horizontal" stackOffset="silhouette">
          <defs>
            <linearGradient id="colonramoutOfMeetings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#429ffd" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#429ffd" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="colortotalScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0960bd" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#0960bd" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,.5)" fill="#353e55" />
          <Line type="monotone" dataKey="amountOfMeetings" stroke="#8884d8" fontSize={20} />
          <XAxis dataKey="name" />
          <YAxis dataKey="totalScore" />
          <Tooltip />
          <Area type="monotone" dataKey="amountOfMeetings" stroke="#429ffd" strokeWidth="2" fillOpacity={1} legendType="circle" dot={true} fill="url(#colonramoutOfMeetings)" />
          <Area type="monotone" dataKey="totalScore" dot={true} stroke="#0960bd" strokeWidth="2" fillOpacity={1} fill="url(#colortotalScore)" />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaPage;
