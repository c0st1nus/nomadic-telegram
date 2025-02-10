import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Story } from "../../components";

class Story_Class {
    public id: number;
    public title: string;
    public description: string;
    public category: string;
    public image: string;
    // public points: number = 0;

    constructor(id: number, title: string, description: string, category: string, image: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.image = image;
    }
};

interface ICategory {
    activated?: boolean;
    // onClick: () => void;
};

const DefaultCategory: Partial<ICategory> = {
    activated: false
}

const StyledHome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    font-size: 2rem;
    gap: 2vh;
    /* position: fixed; */
`;

const StyledGradient = styled.div`
    z-index: -2;
    background: black;
    position: absolute;
    width: 100%;
    height: 17vh;
    top: 0;
    overflow: hidden;
`;

const StyledCategories = styled.div`
    height: 5.5vh;
    width: 100%;
    display: flex;
    margin-top: 1vh;
    flex-direction: row;
    z-index: 1;
    overflow-x: auto;
    overflow-y: hidden; // Prevent vertical scroll
    gap: 0;
    padding: 0.7vh;
    border-bottom: 3px solid #0000002f;
    overscroll-behavior-x: contain; // Contain horizontal scroll
    touch-action: pan-x; // Improve touch scrolling
`;

const StyledCategory = styled.button<ICategory>`
    margin: 0 0.5vh;
    height: 2rem;
    text-align: center;
    border-radius: 1vh;
    background-color: ${props => props.activated ? "#C67C4E" : "white"};
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
    outline: none;
    border: none;
`;


const StyledStories = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden; // Prevent horizontal scroll
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overscroll-behavior-y: contain; // Contain vertical scroll
    touch-action: pan-y; // Improve touch scrolling
`;

const StyledStory = styled(NavLink)`
    display: flex;
    width: 20vh;
    height: 30vh;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 1rem;
    border: 1px solid #0000002f;
    padding: 1rem;
    text-decoration: none;
    background-color: white;
    margin: 1vh auto;
    z-index: -2;
`;

const StyledText = styled.div`
    color: white;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    margin-top: 20px;
`;

const Home = () => {
    // Add useEffect to control body overflow
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [currentCategory, setCurrentCategory] = useState(DefaultCategory);

    const handleCategoryClick = (category: string) => {
        const newCategory = category === activeCategory ? null : category;
        setActiveCategory(newCategory);
        setCurrentCategory({
            ...currentCategory,
            activated: Boolean(newCategory)
        });
        console.log(newCategory);
    };

    const categories = [
        "Drama",
        "Comedy",
        "Action",
        "Horror",
        "Thriller",
    ];

    const stories = [
        new Story_Class(1, "Tomiris", "Bsssssssssssssssssslah blah blah", "Drama", "Tomiris.png"),
        new Story_Class(2, "Tomiris2", "Blah blah blah", "Comedy", "Tomiris.png"),
        new Story_Class(3, "Tomiris3", "Blah blah blah", "Action", "Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "Tomiris.png"),
        new Story_Class(5, "Tomiris5", "Blah blah blah", "Horror", "Tomiris.png"),
        new Story_Class(6, "Tomiris6", "Blah blah blah", "Horror", "Tomiris.png"),
    ];
    
    return (
        <StyledHome>
            <StyledGradient />
            <StyledText>Истории</StyledText>
            <StyledCategories>
                {categories.map((category, index) => (
                    <StyledCategory
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        activated={activeCategory === category}
                    >
                        {category}
                    </StyledCategory>
                ))}
            </StyledCategories>
            <StyledStories>
                {stories
                    .filter((story) => !activeCategory || story.category === activeCategory)
                    .map((story) => (
                        <StyledStory to={`/story/${story.id}`} key={story.id}>
                            <Story
                                image={story.image}
                                title={story.title}
                                description={story.description}
                                category={story.category}
                            />
                        </StyledStory>
                    ))}
                <br/><br/>
            </StyledStories>
        </StyledHome>
    );
};

export default Home;
