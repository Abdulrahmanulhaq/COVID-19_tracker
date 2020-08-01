import React,{useEffect} from 'react';

import { Pie,Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';










const Chart2 = ({ data:{confirmed,deaths,recovered},country }) =>{
  

    useEffect(()=>{
        const fetchAPI= async () =>{
           
        }

        fetchAPI();
    },[]);

    const barChart=(
        confirmed
         ? (
             <Bar 
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
    );

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

    return (

        <div className={styles.container}>
        {country ? barChart:PieChart }
        
    </div>
        

    )
}

export default Chart2;