import styled from 'styled-components';

const StyledFooter = styled.footer` 
    padding: 0;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2vh;
    backdrop-filter: blur(1vh);
    background: rgba(174, 195, 224, 0.3);
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




const Footer = () => {
    return (
        <StyledFooter>
            <IconButton onClick={() => console.log('button 1 clicked')}>
                <Icon src="/close.svg" alt="icon 1" size="6vh"/>
            </IconButton>
            <IconButton onClick={() => console.log('button 2 clicked')}>
                <Icon src="/home.svg" alt="icon 2" size='5vh'/>
            </IconButton>
            <IconButton onClick={() => console.log('button 3 clicked')}>
                <Icon src="/settings.svg" alt="icon 3" size="6vh"/>
            </IconButton>
        </StyledFooter>
    );
};

export default Footer;