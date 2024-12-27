import styled from "styled-components";

interface SearchBarProps {
    size?: string;
    textColor?: string;
    fontWeight?: string;
    textAlign?: string;
    selfAlign?: string;
    margin?: string;
    padding?: string;
    position?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    width?: string;
    height?: string;
    placeholder?: string;
    type?: string;
    inputPadding?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchClick?: () => void;
    searchButtonIcon?: string;
    searchButtonIconSize?: string;
};

const DefaultProps: Partial<SearchBarProps> = {
    size: "3vh",
    selfAlign: "center",
    textColor: "#000000",
    fontWeight: "400",
    textAlign: "left",
    margin: "0",
    padding: "0",
    position: "static",
    background: "#FFFFFF",
    border: "1px solid #0000002f",
    borderRadius: "0",
    boxShadow: "none",
    width: "100%",
    height: "3rem",
    placeholder: "Search...",
    type: "text",
    value: "",
    onChange: () => {},
    onSearchClick: () => {},
    searchButtonIcon: "",
    searchButtonIconSize: "2vh",
};

const StyledSearchBar = styled.div<SearchBarProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ width }) => width};
    align-self: ${({ selfAlign }) => selfAlign};
    height: ${({ height }) => height};
    background-color: ${({ background }) => background};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    box-shadow: ${({ boxShadow }) => boxShadow};
    padding: ${({ padding }) => padding};
    position: ${({ position }) => position};
    margin: ${({ margin }) => margin};
`;

const StyledInput = styled.input<SearchBarProps>`
    font-size: ${({ size }) => size};
    color: ${({ textColor }) => textColor};
    font-weight: ${({ fontWeight }) => fontWeight};
    text-align: ${({ textAlign }) => textAlign};
    margin-right: ${({ inputPadding }) => inputPadding};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
`;

const StyledButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 1vh 1.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`;

const SearchBar = ({...props}) => {
    return <StyledSearchBar {...DefaultProps} {...props}>
        <StyledButton onClick={props.onSearchClick}>
            <img src={props.searchButtonIcon} alt="search" width={props.searchButtonIconSize} height={props.searchButtonIconSize} />
        </StyledButton>
        <StyledInput {...DefaultProps} {...props} />
        
    </StyledSearchBar>;
};

export default SearchBar;