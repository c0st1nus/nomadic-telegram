import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: sticky;
  width: 100%;
  top: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  user-select: none;
  background-image: linear-gradient(hsla(0, 0.00%, 0.00%, 0.00), hsl(0, 0.00%, 0.00%));
`;

const StyledIcon = styled.img`
  width: 5vh;
  height: 5vh;
  user-select: none;
  outline: none;
`;
const StyledLink = styled(NavLink)`
  border-radius: 50%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar2 = () => {
  const location = useLocation();
  const buttons = [
      { name: "close", icon: "/public/close.svg", path: "/home" },
      { name: "home", icon: "/public/home.svg", path: "/home" },
      { name: "settings", icon: "/public/settings.svg", path: "/home" },
  ];

  return (
      <StyledNavbar>
          {buttons.map((button) => (
              <StyledLink 
                  key={button.name} 
                  to={button.path} 
                  style={{ 
                      backgroundColor: button.path === location.pathname 
                          ? "#ffa6003c" 
                          : "transparent" 
                  }}
              >
                  <StyledIcon src={button.icon} />
              </StyledLink>
          ))}
      </StyledNavbar>
  );
};

export default Navbar2;