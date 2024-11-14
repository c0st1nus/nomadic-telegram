import styled from "styled-components";
import Balance from "../../components/balance";

const StyledHead = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5vh;
    padding-top: 2vh;
`;

const Head = () => {
    return (
        <StyledHead>
            <Balance 
                leftIcon="/diamond.png" 
                amount={100} 
                onClick={() => console.log('clicked')}
            />
            <Balance 
                leftIcon="/kese.png" 
                amount={100} 
                onClick={() => console.log('clicked')}
            />
        </StyledHead>    
    );
};

export default Head;