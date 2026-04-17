'use client'

import { timeLineProvider } from '@/component/timeline/TimeLineContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const StatsPage = () => {
  
  const {timeLine} =useContext(timeLineProvider)
  // console.log(timeLine)
   const filterCall =timeLine.filter(call=>call.type==='Call')
   const filterText =timeLine.filter(call=>call.type==='Text')
   const filterVideo =timeLine.filter(call=>call.type==='Video')

const data = [
  { name: 'Call', value: filterCall.length, fill: '#0088FE' },
  { name: 'Text', value:filterText.length, fill: '#00C49F' },
  { name: 'Video', value:filterVideo.length, fill: '#FFBB28' },
  
];

  return (
    <div className='min-h-screen  bg-base-200'>
    <div className='max-w-7xl mx-auto p-5'>
       <div>
       <h2 className='md:text-5xl text-3xl font-bold text-[#1F2937]'>Friendship Analytics</h2>
     </div>
   <div className='bg-white shadow rounded-2xl p-7 mt-6'>
       <h2 className='text-3xl font-bold text-[#244D3F]'>By Interaction Type</h2>

      <div className='flex justify-center items-center '>
        <PieChart style={{ width: '350px', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
      </div>
   </div>
    </div>
    </div>
  );
};

export default StatsPage;