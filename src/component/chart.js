import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './table.css'


    // Chart


const COLORS = ['#C83B2D', '#E1BE0E', '#410DDA'];



const Example = (props) =>{
  const demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  
    return (
      <PieChart className="chart" width={220} height={270} >
        <Pie 
          data={props.data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {props.data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        
      </PieChart>
    );
  
}
export default Example;