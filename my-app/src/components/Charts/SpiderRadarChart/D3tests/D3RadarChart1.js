// import './RadarChart.scss'

// import * as d3 from "d3"
// import PropTypes from "prop-types"

// export default function RadarChart() {
//     // general
//     // const colorBackground = "#272C2F"
//     // const width = 258
//     // const height = 263


//     // data
//     // const data = [
//     //     { axis: "Cardio", value: 80 },
//     //     { axis: "Energy", value: 120 },
//     //     { axis: "Endurance", value: 140 },
//     //     { axis: "Strength", value: 50 },
//     //     { axis: "Speed", value: 200 },
//     //     { axis: "Intensity", value: 90 },
//     //   ]

//     // variables pour RadarChart
    // // number of sides of our polygon
    // const NUM_OF_SIDES = 5
    // // number of levels we want
    // const NUM_OF_LEVEL = 4
    // // width and height of our SVG wrapper
    // const size = Math.min( window.innerWidth, window.innerHeight, 400 )
    // // polygon to start at the top, like a clock
    // const offset = Math.PI
    // // size of the angle created at the center of the drawing area by each side
    // const polyangle = ( Math.PI * 2 ) / NUM_OF_SIDES
    // // distance between center and edge of the drawing area
    // const r = 0.8 * size
    // // max allowable distance from center to the edge of a polygon - to draw labels : little gap between the chart area and the edge of the drawing area
    // const r_0 = r / 2
    // // for SVG to start at the middle of our drawing area (and no top left)
    // const center =
    // {
    //     x: size / 2,
    //     y: size / 2
    // }


//     // generate data
//     const generateData = ( length ) =>
//       {
//           const data = []
//           const min = 25
//           const max = 100

//           for ( let i = 0; i < length; i++ ) 
//           {
//               data.push(
//                   {
//                       name: "Label",
//                       value: Math.round( min + ( ( max - min ) * Math.random() ) )
//                   }
//               );
//           }

//           return data;
//       }

//     const genTicks = levels =>
//     {
//         const ticks = [];
//         const step = 100 / levels;
//         for ( let i = 0; i <= levels; i++ ) 
//         {
//             const num = step * i;
//             if ( Number.isInteger( step ) )
//             {
//                 ticks.push( num );
//             }
//             else
//             {
//                 ticks.push( num.toFixed( 2 ) );
//             }
//         }
//         return ticks
//     }

// const ticks = genTicks( NUM_OF_LEVEL )
// const dataset = generateData( NUM_OF_SIDES )


//     // transformer ce bloc directement dans le return
//     const wrapper = d3.select( ".chart" )
//     .append( "svg" )
//     .attr( "width", size )
//     .attr( "height", size )

//     const g = d3.select( "svg" ).append( "g" )
//     // help normalize our data so that it fits on our chart
//     const scale = d3.scaleLinear()
//     .domain( [ 0, 100 ] )
//     .range( [ 0, r_0 ] );
//     // fin du bloc

//     // points for our polygon, basic trigonometry : 
//     // x = length * Sin(angle) & y = length * Cos(angle)
//     const generatePoint = ( { length, angle } ) =>
//     {
//       const point =
//         {
//             x: center.x + ( length * Math.sin( offset - angle ) ),
//             y: center.y + ( length * Math.cos( offset - angle ) )
//         };
//       return point
//     }

    // // generate all the vertices of our polygon
    // let points = [];  const length = 100;
    // for ( let vertex = 0; vertex < NUM_OF_SIDES; vertex++ ) 
    // {
    //     const theta = vertex * polyangle;

    //     points.push( generatePoint( { length, angle: theta } ) )
    // }

    // // draw points
    // const drawPath = ( points, parent ) =>
    //   {
    //       const lineGenerator = d3.line()
    //           .x( d => d.x )
    //           .y( d => d.y )

    //       parent.append( "path" )
    //           .attr( "d", lineGenerator( points ) )
    //   }

    //   points = [...points,points[0]];
    //   drawPath(points,g);

    
//       const generateAndDrawLevels = ( levelsCount, sideCount ) =>
// {

//     for ( let level = 1; level <= levelsCount; level++ ) 
//     {
//         const hyp = ( level / levelsCount ) * r_0;

//         const points = [];
//         for ( let vertex = 0; vertex < sideCount; vertex++ ) 
//         {
//             const theta = vertex * polyangle;

//             points.push( generatePoint( { length: hyp, angle: theta } ) );

//         }
//         const group = g.append( "g" ).attr( "class", "levels" );
//         drawPath( [ ...points, points[ 0 ] ], group );
//     }


// };

// generateAndDrawLevels( NUM_OF_LEVEL, NUM_OF_SIDES )

//     return (
//       // svg here : transformer en component RadarChart
//       <div className="chart">

//       {/* data here : transformer en component RadarChartData*/}
//         <div className="tooltip"></div>
//       </div>
//     )
// }
