import styled from 'styled-components';
import React from 'react';

interface BalanceProps {
    leftIcon: string;
    amount: number;
    onClick?: () => void;
}

const BalanceButton = styled.button`
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vh 1.2vh;
    border: rgba(255, 255, 255, 0.3) solid 0.3vh;
    filter: drop-shadow(0 0 0.5vh rgba(0, 0, 0, 0.7));
    border-radius: 3vh;
    background: #aec3e0;
    cursor: pointer;
    color: white;
    gap: 1vh;

    &:hover {
        filter: drop-shadow(0 0 0.5vh rgba(81, 69, 102, 0.89));;
    }
`;

const Icon = styled.img`
    width: 4vh;
    height: 4vh;
`;

const Amount = styled.span`
    font-size: 3vh;
    font-weight: bold;
    text-align: center;
    flex: 1;
    margin: 0 1vh;
`;

const Balance: React.FC<BalanceProps> = ({ leftIcon, amount, onClick }) => {
    return (
        <BalanceButton onClick={onClick}>
            <Icon src={leftIcon} alt="left icon" />
            <Amount>{amount}</Amount>
            <Icon src="/plus.svg" alt="right icon" />
        </BalanceButton>
    );  
};

export default Balance;