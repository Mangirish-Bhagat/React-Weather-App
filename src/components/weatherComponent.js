import styled from 'styled-components';

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    /* background-color: #d9dbda; */
`;

export const WeatherComponent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 500px;
    height: 520px;
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`;

export const WeatherName = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: black;
    padding-bottom: 20px;
    /* text-align: center; */
   
`;

export const WeatherIcon = styled.img`
    width: 150px;
    height: 120px;
    margin: 20px;
    padding-bottom: 15%;
`;


export const WeatherSearchTitle = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: black;
    padding-bottom: 50px;
`;

export const WeatherSearchInput = styled.input`
    /* border: none;
    outline: none; */
    /* margin-left: 15px; */
    font-size: 16px;
    font-weight: bold;
    width: 50%;
    height: 22px;
    padding-bottom: 25x;
`;

export const SearchButton = styled.button`
    color: black;
    background-color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid;
    border-radius: 6px;
    box-shadow: 0 4px #999;

  &:active {
  background-color: black;
  color: white;
  box-shadow: 0 2px #666;
  transform: translateY(4px);
}
`;



