import React from 'react';

import { Header, Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Projected Cost Breakdown'/>
      <div className='w-full'>
        <PieChart
          id='pie-chart'
          data={pieChartData}
          legendVisiblity
          height='full'
        />
      </div>
    </div>
  )
}

export default Pie