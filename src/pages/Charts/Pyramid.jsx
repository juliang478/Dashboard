import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, Inject, AccumulationTooltip, 
  AccumulationLegend, AccumulationDataLabel, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';
import { PyramidData } from '../../data/dummy';
import { Header } from '../../components';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Color Mapping'/>
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          legendSettings={{ background: 'white', position: 'Top' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}
        >
            <Inject services={[PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name='Food'
                dataSource={PyramidData}
                xName='x' 
                yName='y' 
                type='Pyramid'
                i width="45%"
                height="80%"
                neckWidth="15%"
                gapRatio={0.03}
                explode
                emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'text',
                }}
              />
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
  )
}

export default Pie