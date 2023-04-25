import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, 
  Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const ColorMapping = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Color Mapping'/>
      <div className='w-full'>
        <ChartComponent
          id='financial-chart'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ mode: 'Range', background: 'white' }}
        >
          <Inject services={[ColumnSeries, Category, Legend, Tooltip]}/>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {
              rangeColorMapping.map((item, index) => 
              <RangeColorSettingDirective key={index} {...item}/>
            )
            }
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping