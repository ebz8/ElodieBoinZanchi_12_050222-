import './RadarChart.scss'

import * as d3 from "d3"
import PropTypes from "prop-types"
import { useRef, useEffect, useState } from 'react'
// import debounce from 'lodash/debounce'
// useLayoutEffect

// D3 for maths, React for DOM
export default function RadarChart({userPerformance}) {
  ////////////////////// VARIABLES ////////////////////////
  const width= "350"
  const height = "350"

  // number of sides of our polygon
  const NUM_OF_SIDES = 5
  // number of levels we want
  const NUM_OF_LEVEL = 4
  // width and height of our SVG wrapper
  // const size = Math.min( window.innerWidth, window.innerHeight, 400 )
  // polygon to start at the top, like a clock
  const offset = Math.PI
  // size of the angle created at the center of the drawing area by each side
  const polyangle = ( Math.PI * 2 ) / NUM_OF_SIDES
  // distance between center and edge of the drawing area
  const r = 0.8 * width;
  // max allowable distance from center to the edge of a polygon - to draw labels : little gap between the chart area and the edge of the drawing area
  const r_0 = r / 2
  // for SVG to start at the middle of our drawing area (and no top left)
  const center =
  {
      x: width / 2,
      y: height / 2
  }  
  
  ///////////////// DATA TREATMENT ///////////////////
  const dataAxis = userPerformance.data.kind
  // const dataUser = userPerformance.data.data
  console.log(userPerformance.data.data)


  ////////////////////// REF ////////////////////////
  const svgRefBase = useRef()
  const svgRefData = useRef()

  const [dataUser, setDataUser] = useState([])

  ////////////////// USE EFFECT /////////////////
  // useEffect(() => {
  //   // const height = svgRef.current.clientHeight
  //   // const width = svgRef.current.clientWidth
  //   drawChartData()
  // }, [dataUser])

    // render the chart base without data
    useEffect(() => {
      drawChartBase()
  }, [])

  ////////////////// UTILS : DRAW POLYGONS /////////////////
  // Using basic trigonometry, we get x and y
  // x = length * Sin(angle)  &   y = length * Cos(angle)


  
  ////////////////// CHART WITH D3 /////////////////
  // Chart base
  const drawChartBase = () => {
    let chartContainer = d3.select(svgRefBase.current)
                        .attr("width", width)
                        .attr("height", height)

    let polygons = d3.arc()
    .innerRadius
  }

  // Data chart
  const drawChartData = (data) => {
    d3.select(svgRefData.current)
      .data(data).enter()   
  }

  ////////////////// SVG COMPONENT /////////////////
    return (
      // svg here : transformer en component RadarChart
      <div className="radarchart">
        <svg id="chartBase" ref={svgRefBase}>
          <g><path d="M140,103.75L117.26683315065848,116.87499999999999L117.26683315065848,143.125L140,156.25L162.7331668493415,143.125L162.7331668493415,116.875L140,103.75" 
        strokeWidth="1" stroke="white" fill="transparent" strokeOpacity="1" fillOpacity="0.5" />
      <path d="M140,77.5L94.53366630131697,103.74999999999999L94.53366630131697,156.25L140,182.5L185.466333698683,156.25000000000003L185.46633369868303,103.75L140,77.5" 
        strokeWidth="1" stroke="white" fill="transparent" strokeOpacity="1" fillOpacity="0.5" />
      <path d="M140,51.25L71.80049945197547,90.62499999999997L71.80049945197544,169.37499999999997L139.99999999999997,208.75L208.1995005480245,169.37500000000003L208.19950054802456,90.625L140,51.25" 
        strokeWidth="1" stroke="white" fill="transparent" strokeOpacity="1" fillOpacity="0.5" />
      <path d="M140,25L49.067332602633954,77.49999999999997L49.067332602633925,182.49999999999997L139.99999999999997,235L230.93266739736603,182.50000000000006L230.93266739736606,77.5L140,25" 
      strokeWidth="1" stroke="white" fill="transparent" strokeOpacity="1" fillOpacity="0.5"></path></g>
        </svg>

      {/* data here : transformer en component RadarChartData*/}
        <div>
          <svg id="chartData" ref={svgRefData}></svg>
        </div>
      </div>
    )
}
