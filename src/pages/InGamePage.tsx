import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Window, {Choice} from '../components/dialog';
import { useState } from 'react';
import Scene, {Character} from '../components/Characters';

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
    z-index: 0;
`;
const InGamePage = () => {
    const [name, setName] = useState("Arbitrarz name");
    const [text, setText] = useState("Lorveus aliquet libero vehicula at. Donec eget nunc non urna commodo dignissim.");
    const [isChoice, setIsChoice] = useState(true);
    const [choices, setChoices] = useState<Choice[]>([
        new Choice(true, "Premium choice text", "1", 100),
        new Choice(false, "Regular choice text", "2")
    ]);
    const [characters, setCharacters] = useState<Character[]>([
        new Character("Tomiris", 150, { x: 0, y: 0 }, "/public/Tomiris-1.png"),
    ]);
    
    return (
        <StyledBackground>
            <StyledLeave to="/home">
                <StyledIcon src="/public/close.svg"/>
            </StyledLeave>
            <Window choices={choices} name={name} text={text} choice = {isChoice}/>
            <Scene characters={characters} />
        </StyledBackground>
    );
};
export default InGamePage;
