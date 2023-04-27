/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell,Tooltip } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 14*4.5, color: '#0000ff' },
  { name: 'B', value: 7*4.5, color: '#00ff00' },
  { name: 'C', value: 18*4.5, color: '#ff0000' },
];





const PieChartWithNeedle = ({width,height,value})=> {
  console.log(value);
  const cx = 150;
  const cy = 200;
  const iR = 50;
  const oR = 100;
  const needle = (value, cx, cy, iR, oR, color) => {

    const ang =value * 4.5 + 2;//180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;
  
    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key={value + Math.random(1,100)} />,
      <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} key={value + Math.random(1,100)}/>,
    ];
  };

    return (
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          startAngle={40*4.5}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <Tooltip/>
        </Pie>
        {needle(value, cx, cy, iR, oR, '#d0d000')}
      </PieChart>
    );
}
export default PieChartWithNeedle;