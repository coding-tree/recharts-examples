import React from 'react';
import {Cell, Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip} from 'recharts';

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

const RadialPage = () => {
  return (
    <div className="container">
      {/* RADIAL BAR CHART */}
      <ResponsiveContainer className="recharts__container">
        <RadialBarChart innerRadius="20%" outerRadius="100%" data={data} startAngle={180} endAngle={0}>
          <RadialBar minAngle={15} label={{fill: '#000', position: 'insideStart'}} background dataKey="totalScore">
            {data.map((el, index) => (
              <Cell key={index} fill={el.color}></Cell>
            ))}
          </RadialBar>
          <Legend iconSize={30} layout="vertical" verticalAlign="middle" align="right" />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialPage;
