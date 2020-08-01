import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Pie, } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data:{confirmed,deaths,recovered},country }) =>{
    const [dailyData,setDailyData] = useState ([]);

    useEffect(()=>{
        const fetchAPI= async () =>{
            setDailyData( await fetchDailyData());
        }

        fetchAPI();
    },[]);

   

    console.log(confirmed,recovered,deaths)

    const PieChart=(
        confirmed
         ? (
             <Pie 
                data={{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgb(26, 26, 255)',
                           ' rgb(53, 255, 53)',
                           'rgb(255, 36, 36)',
                        ],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={{
                    legend:{display: false},
                    title:{ display:true, text:`Current state in ${country}`}
                }}
             />
         ) :null
    )


    const lineChart =(
        dailyData.length
        ? (
        <Line 
            data={{
                backgroundColor:'red',
                labels: dailyData.map(({ date })=> date),
                datasets:[{
                    data: dailyData.map(({ confirmed })=> confirmed),
                    label:'Infected',
                    pointStyle: 'rectRounded', 
                    borderColor: '#3333ff',
                    fill:true,
                },{
                    data: dailyData.map(({ deaths })=> deaths),
                    label:'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill:true,
                }],
            }}
        />): null
    );

    
    return (
        <div className={styles.container}>
            {country ? PieChart: lineChart}
            
        </div>
    )
}

export default Chart;