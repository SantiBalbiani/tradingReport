import React, { Component } from 'react';
 import {Chart} from "chart.js"; 
/* import classes from "./styles/LineGraph.module.css";  */
/* import API from '../config/API'; */
import axios from 'axios';





class LineGraph extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            data: 0,
            param: props.param,
            months: props.months,
            title: props.label,
            isTypeLine: props.typeGr,
            typeGr: 'line',
            info: props.info,
        }
    }
    chartRef = React.createRef();
    

    
  async  componentDidMount() {




         const myChartRef = this.chartRef.current.getContext("2d"); 
        let prodsByCat;
        let fechasDB = 0;
        
        /* prodsByCat = await API.get('http://localhost:3100'); */
        prodsByCat = await axios.get("https://078d2f5bc77a.ngrok.io")
  /*       .then(function (response){
            console.log('la rta');
            console.log(response);
        }); */
       
        prodsByCat = prodsByCat.data;
        let emas = [];
        let prices = [];
        //prodsByCat = prodsByCat.data;
        //prodsByCat = prodsByCat.filter( aData => aData.createdAt !== null);
        this.setState({typeGr: 'line'});
        fechasDB = prodsByCat.map( (aData) => new Date(aData.date).toDateString() );
        emas = prodsByCat.map( data => data.EMAvalue);
         prices = prodsByCat.map(data => data.price);

        

         new Chart(myChartRef, {
            type: 'line',
            
            data: {
                labels: fechasDB,
                datasets: [{
                    label: "EMA 200",
                    data: emas,
                    borderColor: "#597ff9",
                    hoverBackgroundColor: "#597AAA", 
                    //yAxyesID: "id1"
                   // yAxisID: "id1" // typo in property name.
                },{
                    label: "Closing Prices",
                    data: prices,
                    type: 'line',
                    borderColor: "#F97ff9",
                    //yAxesID: "id2"
                    //yAxisID: "id2" // typo in property name.
                }],
            },
            options: {
                
                responsive: true,
                maintainAspectRatio: false,
                
                title: {
                    display: true,
                    position: 'bottom',
                    text: 'Análisis DAI/BTC',
                    fontSize: 14
                },
                scale: {
                    
                    display: false,
                    gridLines:{
                        display:false,
                        drawBorder:false
                    },
                    
                       
                       
                       type: "linear",
                        scaleLabel: {
                            
                            
                            display: true,
                            labelString: 'USD',
                            beginAtZero: true,
                        },
                }
                //scales: [{
/*                 scales: { 
                   yAxes: [{
                       display: true,
                       position: 'left',
                       type: "linear",
                        scaleLabel: {
                            display: true,
                            labelString: 'USD',
                            beginAtZero: true,
                        },
                       //yAxisID: "id1"
                       id: "id1" // incorrect property name.
                        },
                        {
                            scaleLabel: {
                            display: true,
                            
                            beginAtZero: true,
                            },
                        //display: false,
                        display: true, // Hopefully don't have to explain this one.
                        type: "linear",
                        position:"right",
                        //yAxisID: "id2"
                        id: "id2" // incorrect property name.
                    }]
                //}]
                } // Shouldn't be an array. */
            }
              });
        
    
    }
    render() {
        return (
            <div className="table-responsive">
                <canvas
                    id="myChart"
                    className="table"
                    style={{minHeight:"350px"}} 
                    ref={this.chartRef}

                />
            </div>
        )
    }
}

export default LineGraph;