import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div>
      <h1> Weather Application </h1>
      <p> Find Out Temperature, Condition and more... </p>
      {this.props.city && this.props.country && <p> Location: {this.props.city},{this.props.country}</p> }
      {this.props.temperature && <p> Temperature:{this.props.temperature}</p>}
      {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
      {this.props.description && <p> Conditions: {this.props.description}</p>}
      {this.props.error && <p> {this.props.error} </p>}
      </div>
    );
  }
};

export default Weather;