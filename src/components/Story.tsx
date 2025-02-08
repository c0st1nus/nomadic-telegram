import styled from "styled-components";

interface StoryProps {
    image: string;
    title: string;
    description: string;
    category: string;
    points: number;
};

const StyledStory = styled.div<StoryProps>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 5px;
`;
const StyledText = styled.div
`
    color: black;
    font-size: 1rem;
    text-wrap: nowrap;
    overflow: hidden;
    width: 20vh;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const StyledImage = styled.img`
    height: 20vh;
    align-self: center;
    object-fit: contain;
    border-radius: 17px;
    padding: 10px;
    overflow: hidden;
    background-color:rgb(235, 234, 234);
`;

const StyledPoints = styled.div`
    position: absolute;
    top: 1vh;
    right: 1vh;
    background-color: #000000;
    color: #FFFFFF;
    padding: 0.5vh 1vh;
    border-radius: 1vh;
    font-size: 1.5vh;
    font-weight: 700;
    z-index: 1;
    user-select: none;
    cursor: default;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
`;

const Story = ({...props}: StoryProps) => {
    return (
        <StyledStory {...props}>
            <StyledImage src={props.image} alt={props.title} />
            <StyledPoints>{props.points}</StyledPoints>
            <StyledText style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{props.title}</StyledText>
            <StyledText>{props.category}</StyledText>
            <StyledText>{props.description}</StyledText>
        </StyledStory>
    );
};

export default Story;