import styled from "styled-components";
import Paragraph from "./paragraph";

interface StoryProps {
    image: string;
    title: string;
    description: string;
    category: string;
    points: number;
};

const StyledStory = styled.div<StoryProps>`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    height: auto;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1vh;
    overflow: hidden;
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
            <Paragraph>{props.title}</Paragraph>
            <Paragraph>{props.category}</Paragraph>
            <Paragraph>{props.description}</Paragraph>
        </StyledStory>
    );
};

export default Story;