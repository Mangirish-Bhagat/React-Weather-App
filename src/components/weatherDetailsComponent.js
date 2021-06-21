import styled from 'styled-components';


export const WeatherDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    /* background-color: #d9dbda; */
`;


export const WeatherDetailsComponent = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 30px; */
    width: 500px;
    height: 520px;
    box-shadow: 0 3px 10px 0 #aaa;
    /* align-items: center; */
`;


export const ExternalsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 30px auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const WeatherDetailsName = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: black;
    padding-bottom: 20px;
    text-align: center;
   
`;

export const WeatherBackButton = styled.button`
    color: black;
    align-items: right;
`;

export const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  /* align-items: left; */
  & span {
    font-size: 28px;
  }
`;

export const WeatherIcon2 = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

export const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;

export const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 20px;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const WeatherInfoIcons = {
    Sunset: "/icons/temp.svg",
    Sunrise: "/icons/temp.svg",
    Humidity: "/icons/Humidity.svg",
    Wind: "/icons/Wind.svg",
    Pressure: "/icons/Pressure.svg",
};

