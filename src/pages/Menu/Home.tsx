import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Paragraph, SearchBar, Story } from "../../components";

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
`;

const StyledGradient = styled.div`
    z-index: -2;
    background: black;
    position: absolute;
    width: 100%;
    height: 30%;
    top: 0;
    left: 0;
`


const StyledEvent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    height: 30%;
    background-color: white;
    border-radius: 22px;
`;

const StyledCategories = styled.div`
    width: 100%;
    display: flex;
    /* flex-wrap: nowrap; */
    margin-top: 1vh;
    flex-direction: row;
    z-index: 1;
    overflow-x: auto;
    /* white-space: nowrap; */
    gap: 0vh;
    padding: 10px;
    border-bottom: 3px solid #0000002f;
`;

const StyledCategory = styled.button<ICategory>`
    margin: 0vh 0.5vh;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: scroll;
    width: 100%;
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
    margin: auto;
    margin-top: 1vh;
    z-index: -2;
`;
const StyledText = styled.div
`
    color: white;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    margin-top: 20px;
`

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [currentCategory, setCurrentCategory] = useState(DefaultCategory);

    const handleCategoryClick = (category: string) => {
        const newCategory = category === activeCategory ? null : category;
        setActiveCategory(newCategory);
        setCurrentCategory({
            ...currentCategory,
            activated: newCategory ? true : false
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
        new Story_Class(1, "Tomiris", "Bsssssssssssssssssslah blah blah", "Drama", "/public/Tomiris.png"),
        new Story_Class(2, "Tomiris2", "Blah blah blah", "Comedy", "/public/Tomiris.png"),
        new Story_Class(3, "Tomiris3", "Blah blah blah", "Action", "/public/Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "/public/Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "/public/Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "/public/Tomiris.png"),

    ];
    
    return (
        <StyledHome>
            <StyledGradient/>
            <StyledText>Истории</StyledText>
            <SearchBar 
            width="80%" 
            height="5vh" 
            borderRadius="3vh" 
            selfAlign="center" 
            margin="2vh 3vh" 
            background="#2A2A2A" 
            searchButtonIconSize="15vh"
            searchButtonIcon="/public/Search.svg"
            inputPadding="1vh"
            textColor="white"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            onSearchClick={() => console.log(searchValue)}
            />
            <StyledEvent> Событие какоето</StyledEvent>
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
                {stories.map((story) => (
                    <StyledStory to={`/story/${story.id}`} key={story.id}>
                        <Story 
                          image={story.image}
                          title={story.title}
                          description={story.description}
                          category={story.category}
                          points={story.points}
                        />
                    </StyledStory>
                ))}
            </StyledStories>
        </StyledHome>
    );
}

export default Home;