import styled from "styled-components";
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
    font-size: 2rem;
`;

const HeadBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 30vh;
    z-index: -1;
    background-image: linear-gradient(to bottom left, #111111, #313131);
`;

const StyledEvent = styled.div`
    position: flex;
    width: 90%;
    height: 20vh;
    margin-top: 5vh;
    border-radius: 3vh;
    background-color: #E8E8E8;
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
`;

const StyledCategory = styled.button<ICategory>`
    flex-shrink: 0;
    padding: 1vh 2vh;
    margin: 0vh 0.5vh;
    border-radius: 1vh;
    background-color: ${props => props.activated ? "#C67C4E" : "transparent"};
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
    gap: 1rem;
    width: 90%;
    margin-top: 2vh;
`;

const StyledStory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid #0000002f;
    padding: 1rem;
`;

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
        new Story_Class(1, "Tomiris", "Blah blah blah", "Drama", "/public/Tomiris.png"),
        new Story_Class(2, "Tomiris2", "Blah blah blah", "Comedy", "/public/Tomiris.png"),
        new Story_Class(3, "Tomiris3", "Blah blah blah", "Action", "/public/Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "/public/Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "/public/Tomiris.png"),
        new Story_Class(4, "Tomiris4", "Blah blah blah", "Horror", "/public/Tomiris.png"),

    ];
    
    return (
        <StyledHome>
            <Paragraph 
            textColor="white" 
            size="3vh" 
            selfAlign="start" 
            padding="2vh 3vh"
            >
            Истории
            </Paragraph>
            <SearchBar 
            width="70%" 
            height="5vh" 
            borderRadius="3vh" 
            selfAlign="start" 
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
            <HeadBackground />
            <StyledEvent />
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
                    <StyledStory key={story.id}>
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