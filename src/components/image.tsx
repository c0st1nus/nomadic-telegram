import styled from 'styled-components';

interface ImageProps {
    src?: string;
}

const StyledImage = styled.img<ImageProps>`
    display: block;
    width: 100%;
`

const Image = ({...props}) => {
    return <StyledImage {...props} />;
};

export default Image;