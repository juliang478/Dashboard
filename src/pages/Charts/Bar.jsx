import React from 'react';
import { ChartComponent, SeriesCollectionDirective,
SeriesDirective, Inject, Legend, BarSeries,
Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Bar'/>
      <div className='w-full'>
        <ChartComponent
          id='charts'
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: {width: 0 }}}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[BarSeries, Category, Legend, Tooltip, DataLabel, ColumnSeries]}/>
          <SeriesCollectionDirective>
            {
              barCustomSeries.map((item, index) => 
                <SeriesDirective key={index} {...item}/>
              )
            }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar