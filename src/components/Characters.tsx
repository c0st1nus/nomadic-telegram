import styled from "styled-components";

export class Character {
    name: string;
    height: number;
    position: { x: number, y: number };
    sprite: string;

    constructor(name: string, height: number, position: { x: number, y: number }, sprite: string) {
        this.name = name;
        this.height = height;
        this.position = position;
        this.sprite = sprite;
    }
}

interface CharacterProps 
{
    name: string;
    height: number;
    position: { x: number, y: number };
    brightness: number;
}

interface SceneProps
{
    characters: Character[];
    name: string;
}

const Scene = ({...props} : SceneProps) => {
    return (
        <div>
            {props.characters.map((character) => (
            <Sprite 
                style={{ transform: `scale(${character.name === props.name ? 1.05 : 1.0})` }} 
                brightness={character.name === props.name ? 100 : 80} 
                src={character.sprite} 
                name={character.name} 
                height={character.height} 
                position={character.position}
            />
            ))}
        </div>
    );
}

const Sprite = styled.img<CharacterProps>
`
    height: ${props => props.height/2}vh;
    width: auto;
    object-fit: contain;
    z-index: 1;
    position: absolute;
    left: ${props => props.position.x}%;
    bottom: ${props => props.position.y}%;
    filter: brightness(${props => props.brightness}%);
`
export default Scene;
