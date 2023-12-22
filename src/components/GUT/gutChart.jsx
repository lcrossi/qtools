import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function GutChart({data}) {
    /* const chartSetting = {
        height: 500,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
        },
    }; */
    const [ chartData, setChartData ] = useState([
      {
        category: "Gravidade",
      },
      {
        category: "Urgência",
      },
      {
        category: "Tendência",
      },
    ])
    const [ dataLabels, setDataLabels ] = useState([])
    let dataAux = []

    useEffect(()=>{
      dataAux = chartData
      let dataLabelsAux = []
      data.map(obj => {
        dataAux[0][`${obj.name}`] = obj.g
        dataAux[1][`${obj.name}`] = obj.u
        dataAux[2][`${obj.name}`] = obj.t
        dataLabelsAux.push({dataKey: obj.name, label: obj.name})
      })
      setChartData(dataAux)
      setDataLabels(dataLabelsAux)
    }, [data])

    function setarDados() {
      dataAux = chartData
      let dataLabelsAux = []
      data.map(obj => {
        dataAux[0][`${obj.name}`] = obj.g
        dataAux[1][`${obj.name}`] = obj.u
        dataAux[2][`${obj.name}`] = obj.t
        dataLabelsAux.push({dataKey: obj.name, label: obj.name})
      })
      
      return dataAux
    }
    

  return (
    <BarChart
      dataset={setarDados()}
      xAxis={[{ scaleType: 'band', dataKey: 'category' }]}
      series={
        dataLabels
      }
      height={600}
      margin={{
        bottom: 200
      }}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'left' },
          padding: {
            left: 60,
          },
          itemMarkWidth: 15,
          itemMarkHeight: 15,
          markGap: 5,
          itemGap: 11,
        },
      }}
    />
  );
}