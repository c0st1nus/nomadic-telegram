import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Window, {Choice} from '../components/dialog';
import { useState } from 'react';
import Scene, {Character} from '../components/Characters';

const StyledLeave = styled(NavLink)`
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    text-decoration: none;
    color: black;
`

const StyledIcon = styled.img`
    height: 5vh;
    width: 5vh;
    object-fit: contain;
`;

const StyledBackground = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-image: url("степь.jpeg");
    background-size: cover;
    z-index: 0;
    overflow: hidden;
`;

const InGamePage = () => {
    const [name] = useState("Tomiris222");
    const [text] = useState("Lorveus aliquet libero vehicula at. Donec eget nunc  la at. Donec eget nun la at. Donec eget nun la at. Donec eget nunnon urna commodo dignissim.");
    const [isChoice] = useState(true);
    const [choices] = useState<Choice[]>([
            new Choice(true, "Premium choice text", "1", 100),
            new Choice(false, "Regular choice text", "2")
        ]);
    const [characters] = useState<Character[]>([
            new Character("Tomiris", 180, { x: 0, y: -5 }, "./Tomiris2.png"),
            new Character("Tomiris1", 150, { x: 50, y: -5 }, "./Tomirisl.png"),
        ]);
    return (
        <StyledBackground>
            <StyledLeave to="/home">
            <StyledIcon src="./close.svg"/>
            </StyledLeave>
            <Window 
            height={
                (() => {
                    const currentCharacter = characters.find(character => character.name === name);
                    return currentCharacter ? currentCharacter.height * 1.5 : undefined;
                })()
            }
            choices={choices} 
            name={name} 
            text={text} 
            choice={isChoice} 
            />
            <Scene name = {name} characters={characters} />
        </StyledBackground>
    );
};
export default InGamePage;
