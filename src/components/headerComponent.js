import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column
`;

export const Header = styled.div`
    color: white;
    background-color: #212120;
    display: flex;
    flex-direction: row;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 6px 0 #555
`;

export const AppNameComponent = styled.div`
    display: flex;
    align-items: center;
`;

export const AppIcon = styled.img`
    width: 36px;
    height: 36px;
    margin: 15px;
`