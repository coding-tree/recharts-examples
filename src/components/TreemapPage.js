import React from 'react';
import {ResponsiveContainer, Tooltip, Treemap} from 'recharts';

const data = [
  {
    name: 'Damian Ospara',
    amountOfMeetings: 17,
    totalScore: 20,
    lastMonth: 12,
  },
  {
    name: 'Józef Rzadkosz',
    amountOfMeetings: 3,
    totalScore: 6,
    lastMonth: 2,
  },
  {
    name: 'Emil Sankowski',
    amountOfMeetings: 3,
    totalScore: 5,
    lastMonth: 4,
  },
  {
    name: 'Kazimierz Bagrowski',
    amountOfMeetings: 2,
    totalScore: 5,
    lastMonth: 5,
  },
  {
    name: 'Angelika Paterak',
    amountOfMeetings: 14,
    totalScore: 1,
    lastMonth: 0,
  },
  {
    name: 'Paweł Wojtkiewicz',
    amountOfMeetings: 5,
    totalScore: 15,
    lastMonth: 12,
  },
  {
    name: 'Jakub Wojtoń',
    amountOfMeetings: 7,
    totalScore: 2,
    lastMonth: 2,
  },
];

const TreemapPage = () => {
  return (
    <div className="container">
      <ResponsiveContainer className="recharts__container">
        <Treemap
          data={data}
          dataKey="totalScore"
          ratio={2 / 5}
          stroke="#fff"
          fill="#8884d8"
        >
          <Tooltip label />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default TreemapPage;
