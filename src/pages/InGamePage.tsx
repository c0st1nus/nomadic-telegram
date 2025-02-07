import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import Navbar2 from '../components/NavBar2';
import Window, {Choice} from '../components/dialog';

const StyledLeave = styled(NavLink)
`
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    text-decoration: none;
    color: black;
`
const StyledIcon = styled.img
`
    height: 5vh;
    width: 5vh;
    object-fit: contain;
`;
const StyledBackground = styled.div
`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-image: url("/public/степь.jpeg");
    background-size: cover;
`;
const InGamePage = () => {
    const name = "Arbitrarz name";
    const text = "Lorveus aliquet libero vehicula at. Donec eget nunc non urna commodo dignissim.";
    const IsChoice = true;
    const choices: Choice[] = 
    [
        new Choice(true, "Premium choice text", "1", 100),
        new Choice(false, "Regular choice text", "2")
    ];
    return (
        <StyledBackground>
            <StyledLeave to="/home">
                <StyledIcon src="/public/close.svg"/>
            </StyledLeave>
            <Window choices={choices} name={name} text={text} choice = {IsChoice}/>
        </StyledBackground>
    );
};
export default InGamePage;
