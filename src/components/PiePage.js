import React from 'react';
import {Cell, Legend, Pie, PieChart, PolarAngleAxis, ResponsiveContainer, Tooltip} from 'recharts';

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

const PiePage = () => {
  return (
    <div className="container">
      {/* PIE CHART */}
      <ResponsiveContainer className="recharts__container">
        <PieChart>
          <Legend />
          <Tooltip />
          <PolarAngleAxis dataKey="amountOfMeetings" cx={20} cy={20} />
          <Pie data={data} nameKey="name" dataKey="amountOfMeetings" cx="50%" cy="50%" outerRadius={80} fill="#fff" label>
            {data.map((entry, index) => {
              return <Cell key={index} fill={entry.color}></Cell>;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PiePage;
