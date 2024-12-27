import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border-top: 1px solid #0000002f;
  user-select: none;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1.5vh 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent; 
`;

const StyledIcon = styled.img`
  width: 5vh;
  height: 5vh;
  user-select: none;
  outline: none;
`;

const Indicator = styled.div<{ leftPosition: number }>`
  position: absolute;
  top: 50%;
  left: ${({ leftPosition }) => `${leftPosition}px`};
  transform: translate(-50%, -50%);
  width: 8vh;
  height: 8vh;
  background-color: #ffa6003c;
  border-radius: 50%;
  transition: left 0.3s ease;
  z-index: 0;
  user-select: none;
`;

const Navbar = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(0);
    const [indicatorPosition, setIndicatorPosition] = useState(0);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    };

    const buttons = [
        { name: "home", icon: "/public/home.svg", path: "/home" },
        { name: "heart", icon: "/public/heart.svg", path: "/favourite" },
        { name: "bag", icon: "/public/bag.svg", path: "/cart" },
        { name: "notification", icon: "/public/notification.svg", path: "/notification" },
    ];

    useEffect(() => {
    const currentButton = buttonRefs.current[activeButton];
    if (currentButton) {
        const rect = currentButton.getBoundingClientRect();
        const navbarRect = currentButton.parentElement?.getBoundingClientRect();
        if (navbarRect) {
        const position = rect.left + rect.width / 2 - navbarRect.left;
        setIndicatorPosition(position);
        }
    }
    }, [activeButton]);

    return (
    <StyledNavbar>
        {buttons.map((button, index) => (
        <StyledButton
            key={button.name}
            onClick={() => {handleButtonClick(index); navigate(button.path);}}
            ref={(el) => (buttonRefs.current[index] = el)}
        >
            <StyledIcon src={button.icon} />
        </StyledButton>
        ))}
        <Indicator leftPosition={indicatorPosition} />
    </StyledNavbar>
    );
};

export default Navbar;