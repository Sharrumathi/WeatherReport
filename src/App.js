import React from "react";

import Weather from "./Weather";

const API_KEY = "12a181b5a909f02622331d603ac07c91";

class App extends React.Component{

  state = {temperature : undefined, city : undefined, country : undefined, humidity : undefined,description : undefined}

  getWeather = async () => {
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();
     this.setState({       
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        });    
  }

  componentDidMount() {
      this.getWeather()
    }

render(){
  return(
    <div>
      <Weather 
      temperature = {this.state.temperature}
      city = {this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      description = {this.state.description}/>
    </div>
  );
}

};

export default App;