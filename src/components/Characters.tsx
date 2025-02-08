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
}

interface SceneProps
{
    characters: Character[];
}

const Scene = ({...props} : SceneProps) => {
    return (
        <div>
            {props.characters.map((character) => (
                <Sprite src={character.sprite} name={character.name} height={character.height} position={character.position}/>
            ))}
        </div>
    );
}

const Sprite = styled.img<CharacterProps>
`
    height: ${props => props.height/2.5}vh;
    object-fit: contain;
    z-index: 1;
    position: absolute;
    left: ${props => props.position.x}%;
    top: ${props => props.position.y}%;
`
export default Scene;
