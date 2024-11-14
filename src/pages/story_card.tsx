import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../components/image';
import Header from '../components/header';
import Paragraph from '../components/paragraph';

const StyledPanel = styled(Link)`
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    display: block;
    width: 85%;
    text-decoration: none;
    color: inherit;
    margin-top: 5%
`;

const TextOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(rgba(185, 206, 232, 0.46), transparent);
    color: white;
    text-align: left;
    padding: 3% 0;
    border: 0.2vh solid white;
    border-radius: 4vh;
    backdrop-filter: blur(1vh);

    @media (max-width: 768px) {
        padding: 5% 0;
    }
`;

interface StoryProps {
    story_image: string;
    story_header: string;
    story_description: string;
    story_link: string;
}

const StoryCard = ({ story_image, story_header, story_description, story_link }: StoryProps) => {
    return (
        <StyledPanel to={story_link}>
            <Image src={story_image} alt="Обложка истории" />
            <TextOverlay>
                <Header color="#FFFFFF" marginLeft="3%" padding="0" size="5vh">
                    {story_header}
                </Header>
                <Paragraph color="#FFFFFF" marginLeft="3%" padding="0" size="3vh">
                    {story_description}
                </Paragraph>
            </TextOverlay>
        </StyledPanel>
    );
};

export default StoryCard;