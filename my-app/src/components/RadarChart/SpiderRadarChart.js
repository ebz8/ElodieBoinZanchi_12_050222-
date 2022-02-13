import './SpiderRadarChart.scss'
import {
  ResponsiveContainer, RadarChart, PolarGrid,
  PolarAngleAxis, Radar
} from 'recharts'

export default function SpiderRadarChart({userPerformance}) {
  ///////////// formating data ////////////////  
  const dataUser = userPerformance.data.data

  const frenchLabels = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }

  const performanceData = dataUser.map((item) => {
    return {
      value: item.value,
      kind: item.kind,
      label: frenchLabels[item.kind]
    }
  })

  ///// Custom chart by tweaking component props and passing in custom components ////

  return (
      <ResponsiveContainer className="radarchart-container stats-item" width="99%" height="100%">
        <RadarChart outerRadius={90} data={performanceData} cx="50%" cy="50%" >
            <PolarGrid />
            <PolarAngleAxis
              dataKey='label'
              stroke="white"
              dy={4}
              
              className='radarchart-label'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: 500}}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
  )
}
