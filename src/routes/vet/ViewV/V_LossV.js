import React,{useState} from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const V_LossV = () => {
  const [chart,setchart] = useState({
    labels : [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets: [
      {
        label: 'بنویس',
        data: [35,40,20,50,],
        // data: {count:50, min: -100, 10: 100},
        backgroundColor: [
          'rgba(111 255 241)',
          // 'rgba(115 155 244)',
          
        ],
        borderColor: [
          'rgb(111 255 241)',
        ],
        borderWidth: 1,
        // borderSkipped:'bottom',

        // base:10
        // barPercentage: 1.3 // فاصله ستون ها
        // barThickness: 75, // ضخامت ستون ها
        // inflateAmount:10, // ضخامت ستون ها
        // grouped:false
        hoverBackgroundColor:['rgba(111 25 241)'],
        hoverBorderWidth:0,
        // indexAxis:'y'
      },
      {
        label: 'hahahaaa',
        data: [15,40,30,30,],
        backgroundColor: [
          // 'rgba(111 255 241)',
          'rgba(115 155 244)',
          
        ],
        borderColor: [
          'rgb(111 255 241)',
        ],
        borderWidth: 1,
      }
    ]
  })

  const options ={
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    scales: {
      x: {stacked: true },
      y: {stacked: true }     
    }
	}
  
return (
<div className=''>
<Bar data={chart} options={options}/>

</div>
)}
export default V_LossV