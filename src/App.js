import React from 'react';
import Navbar from './components/navbar/navbar'
import {Cards,Chart,CountryPicker} from './components'; 
import styles from './App.module.css';
import { fetchData } from './api';

import image from './img/image.png';
import Chart2 from './components/Chart/Chart2';



class App extends React.Component{
    state ={
        data:{},
        country:''
    }

    async componentDidMount() {
        const fetchedData= await fetchData ();

        this.setState({ data:fetchedData });
    }

    handleCountryChange = async (country)=>{
        const fetchedData= await fetchData (country);

        this.setState({ data:fetchedData, country:country });
    }

    render(){
        const { data,country } = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19"/>
                <Navbar />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Chart2 data={data} country={country}/>
                
               
            </div>
        )
    }
}

export default App;