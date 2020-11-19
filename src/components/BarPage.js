import React, {useState} from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Damian Ospara',
    amountOfMeetings: 17,
    totalScore: 20,
    lastMonth: 2,
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
    lastMonth: 2,
  },
  {
    name: 'Kazimierz Bagrowski',
    amountOfMeetings: 2,
    totalScore: 5,
    lastMonth: 2,
  },
  {
    name: 'Angelika Paterak',
    amountOfMeetings: 14,
    totalScore: 1,
    lastMonth: 2,
  },
  {
    name: 'Paweł Wojtkiewicz',
    amountOfMeetings: 5,
    totalScore: 15,
    lastMonth: 2,
  },
  {
    name: 'Jakub Wojtoń',
    amountOfMeetings: 7,
    totalScore: 2,
    lastMonth: 2,
  },
];

const labels = [
  {
    key: 'amountOfMeetings',
    color: '#8e3343',
  },
  {
    key: 'totalScore',
    color: '#a3cd9e',
  },
  {
    key: 'lastMonth',
    color: '#529471',
  },
];

const RenderLegend = ({payload, onClick, onMouseOut, onMouseOver}) => {
  return (
    <div className="label__container">
      {payload.map((el, index) => {
        return (
          <div
            className="label"
            onMouseOut={() => onMouseOut(el)}
            onMouseOver={() => onMouseOver(el)}
            onClick={() => onClick(el)}
            key={index}
          >
            <span
              className="label__badge"
              style={{backgroundColor: el.inactive ? '#eee' : el.color}}
            ></span>
            <span className="label__value">{el.value}</span>
          </div>
        );
      })}
    </div>
  );
};

const BarPage = () => {
  const [barProps, setBarProps] = useState(
    labels.reduce(
      (acc, {key}) => {
        acc[key] = false;
        return acc;
      },
      {hover: null}
    )
  );

  const handleLegendMouseEnter = (e) => {
    if (!barProps[e.dataKey]) {
      setBarProps({
        ...barProps,
        hover: e.dataKey,
      });
    }
  };

  const handleLegendMouseLeave = (e) => {
    setBarProps({
      ...barProps,
      hover: null,
    });
  };

  const selectBar = (e) => {
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
      hover: null,
    });
  };

  return (
    <div className="container">
      {/* BAR CHART VERTICAL */}
      <ResponsiveContainer className="recharts__container">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            onClick={selectBar}
            onMouseOver={handleLegendMouseEnter}
            onMouseOut={handleLegendMouseLeave}
            content={RenderLegend}
          />
          {labels.map((el, index) => (
            <Bar
              key={index}
              dataKey={el.key}
              // stackId="name"
              fill={el.color}
              hide={barProps[el.key] === true}
              fillOpacity={Number(
                barProps.hover === el.key || !barProps.hover ? 1 : 0.3
              )}
            ></Bar>
          ))}
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
