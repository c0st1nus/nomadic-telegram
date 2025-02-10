import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';
import Navbar2 from '../components/NavBar2';

class Story_Class {
    public id: number;
    public title: string;
    public description: string;
    public category: string;
    public image: string;
    public points: number = 0;

    constructor(id: number, title: string, description: string, category: string, image: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.image = image;
    }
};

const stories = [
    new Story_Class(1, "Tomiris", "Blah blah blah", "Drama", "Tomiris.png"),
    new Story_Class(2, "Tomiris2", "Blah blah blah", "Comedy", "История_ Томирис.svg"),
    new Story_Class(3, "Tomiris3", "Blah blah blah", "Action", "Tomiris.png"),
    new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "Tomiris.png"),
    new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "Tomiris.png"),
    new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "Tomiris.png"),

];

const StyledBackground = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-image: url("back 1.svg");
    background-size: cover;
`;

const StyledLogo = styled.img`
    z-index: 0;
    width: 85%;
    /* obdject-fit: contain; */
`;

const StyledTitle = styled.p`
    font-size: 2rem;
    margin: 0px;
`

const StyledText = styled.p`
    background-color:rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid white;
`;

const StyledButton = styled(NavLink)`
    border-radius: 10px;
    width: 50%;
    height: 5%;
    padding: 5px;
    font-size: 1.5rem;
    background-color: #DF941E;
    position: sticky;
    top: 85%;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StoryPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return <div>Error: Story id is missing.</div>;
    }
    const storyIndex = parseInt(id) - 1;
    const story = stories[storyIndex];
    return (
        <StyledBackground>
            <StyledLogo src={story.image} />
            <StyledText>
                <StyledTitle>
                    {story.title}
                </StyledTitle>
                {story.description}
            </StyledText>
            <StyledButton to={`/game/${id}`}>ИГРАТЬ</StyledButton>
            <Navbar2/>
        </StyledBackground>
    );
};
export default StoryPage;