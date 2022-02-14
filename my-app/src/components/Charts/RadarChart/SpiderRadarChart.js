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
  //// add labels to performance data object ////
  const performanceData = dataUser.map((item) => {
    return {
      value: item.value,
      kind: item.kind,
      label: frenchLabels[item.kind]
    }
  })
  //// rotate to match figma mockup ////
  const rotatePerformanceData = performanceData.reverse()
  ///// Custom chart by tweaking component props and passing in custom components ////
  const customTickAxis = ({ x, y, cx, cy, payload, ...rest}) => {
    return (
      <text
        {...rest}    
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 17}
        fontSize={12}
      >
        {payload.value}
      </text>
    )
  }

  return (
      <ResponsiveContainer className="radarchart-container" width="99%" height="100%">
        <RadarChart outerRadius={80} data={rotatePerformanceData} cx="50%" cy="50%" >
            <PolarGrid
              gridType="polygon"
              polarRadius={[10, 20, 40, 60, 80]}
              stroke="#fff"
              radialLines={false}
            />
            <PolarAngleAxis
              dataKey='label'
              stroke="white"
              dy={4}  
              axisLine={false}
              tickLine={false}
              tick={customTickAxis}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
  )
}
