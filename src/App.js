import './App.css';
import React from "react";
import axios from 'axios';
import { Container, Header, AppNameComponent, AppIcon } from './components/headerComponent';
import { SearchButton, WeatherSearchInput, WeatherContainer, WeatherComponent, WeatherName, WeatherIcon, WeatherSearchTitle } from './components/weatherComponent';
import { WeatherInfoIcons, InfoIcon, InfoLabel, InfoContainer, WeatherInfoContainer, WeatherInfoLabel, Location, ExternalsContainer, WeatherIcon2, Condition, WeatherBackButton, WeatherDetailsContainer, WeatherDetailsComponent, WeatherDetailsName } from './components/weatherDetailsComponent';

class App extends React.Component {

  state = {
    name: "Hello World",
    displayWeather: false,
    day: "",
  };

  handleSearch = () => {
    console.log("Clicked!")
    let API_KEY = '96281ba905184d50dad40d5d219e630c'
    let searchCity = this.state.searchText;

    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
    })
    .then(response =>{
      this.setState({ displayWeather: true })
      console.log(response.data);
      let temp = Math.floor(response.data.main.temp - 273);
      let cityName = response.data.name;
      let countryName = response.data.sys.country;
      let weatherDesc = response.data.weather[0].description;
      let humidity = response.data.main.humidity;
      let pressure = response.data.main.pressure;
      let wind = response.data.wind.speed;
      let isDay = response.data.weather[0].icon
      this.setState({ isDay: isDay });
      this.setState({ wind: wind });
      this.setState({ pressure: pressure });
      this.setState ({ humidity: humidity});
      this.setState({ weatherDesc: weatherDesc});
      this.setState({ countryName: countryName });
      this.setState({ cityName: cityName });
      this.setState({ temp: temp })
    })
    .catch((error) => {
      console.log(error);
      if (error){
        alert("Please enter a valid city name");
      }
    });
    

  }

  render() {

    const WeatherInfoComponent = (props) => {
      const {name, value} = props;

      return (
          <InfoContainer>
              <InfoIcon src={WeatherInfoIcons[name]} />
              <InfoLabel>
                  {value}
                  <span>{name}</span>
              </InfoLabel>
          </InfoContainer>
      );
  };

    return (

      <Container>
      <Header>

      <AppNameComponent>
      <AppIcon src="/clouds.svg"/>
      Weather App
      </AppNameComponent>
      
      </Header>

      

      { this.state.displayWeather == false ?(

      <WeatherContainer>

      <WeatherComponent>

      <WeatherName> Weather </WeatherName>
      <WeatherIcon src="/cloudy-clouds.svg" />
      <WeatherSearchTitle>Find weather of your city</WeatherSearchTitle>

      <WeatherSearchInput 
      placeholder = "Search" 
      value = {this.setState.searchText}
      onChange = {(e) => this.setState({ searchText: e.target.value })}  />

      <SearchButton onClick={() => this.handleSearch()}> Search </SearchButton>
      
      </WeatherComponent>

      </WeatherContainer>

        ) : (

          <WeatherDetailsContainer>

          <WeatherDetailsComponent>

           {/* <WeatherBackButton> Back </WeatherBackButton> */}
          <WeatherDetailsName> Weather Details</WeatherDetailsName>

         <ExternalsContainer>
         
            <Condition>
            <span> {`${this.state.temp}°C`} </span>
            {`  |  ${this.state.weatherDesc}`}
            </Condition>

            <WeatherIcon2 src="/cloudy-svgrepo-com.svg"/>

            </ExternalsContainer>

            <Location> {`${this.state.cityName}, ${this.state.countryName}`} </Location>

            <WeatherInfoLabel> Weather Information: </WeatherInfoLabel>

            <WeatherInfoContainer>

            {/* <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/> */}
              {/* <WeatherInfoComponent name = { this.state.dayIS ? "sunset" : "sunrise" } value = {this.state.getTime} /> */}
              <WeatherInfoComponent name = {"Wind"} value = {this.state.wind} />
              
              

            </WeatherInfoContainer>

            <WeatherInfoContainer>

            <WeatherInfoComponent name = {"Humidity"} value = {this.state.humidity} />
            <WeatherInfoComponent name = {"Pressure"} value = {this.state.pressure }/>

            </WeatherInfoContainer>

          </WeatherDetailsComponent>

          </WeatherDetailsContainer>

        )}

      </Container>
    
    );
  }
}

export default App;
