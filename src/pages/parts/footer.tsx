import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer` 
    padding: 0;
    border-top-left-radius: 5vh;
    border-top-right-radius: 5vh;
    position: sticky;
    bottom: 0;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2vh;
    background: white;
    z-index: 100;
`;

const IconButton = styled.button`
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6vh;
    height: 6vh;
    border: 0;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    transition: filter 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 2vh rgba(0, 0, 0, 1));   
    }

    &:active {
        filter: drop-shadow(0 0 2vh rgba(0, 0, 0, 1));
    }
`;


interface IconProps {
    size: string;
}

const Icon = styled.img<IconProps>`
    width: ${({ size }) => size};
    height: 6vh;
    opacity: 0.8;
`;

interface Icon {
    src: string;
    link: string;
    alt: string;
    size?: string | "3vh";
}

interface FooterProps {
    currentPage?: string;
    Icons: Icon[];
    onChange: (page: string) => void;
}


export const Footer = ({...props}: FooterProps) => {
    const navigate = useNavigate();
    return (
        <StyledFooter>
            {}
        {props.Icons.map((icon, index) => (
            <IconButton key={index} onClick={() => {
                props.onChange(index.toString());
                navigate(icon.link);
            }}>
                <Icon src={icon.src} alt={icon.alt} size={icon.size || "3vh"} />
            </IconButton>
        ))}
        </StyledFooter>
    );
};

export default Footer;