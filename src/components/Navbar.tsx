import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  border-top: 1px solid #0000002f;
  user-select: none;
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

const Navbar = () => {
    const location = useLocation();
    const buttons = [
        { name: "home", icon: "/public/home.svg", path: "/home" },
        { name: "heart", icon: "/public/heart.svg", path: "/favourite" },
        { name: "bag", icon: "/public/bag.svg", path: "/cart" },
        { name: "notification", icon: "/public/notification.svg", path: "/notification" },
    ];
    return (
    <StyledNavbar>
        {buttons.map((button) => (
        <StyledLink key={button.name} to={button.path} style={{ backgroundColor: button.path == location.pathname ? "#ffa6003c" : "transparent" }}>
          <StyledIcon src={button.icon} />
        </StyledLink>
        ))}

    </StyledNavbar>
    );
};

export default Navbar;