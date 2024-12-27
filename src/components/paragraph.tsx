import styled from "styled-components";

interface ParagraphProps {
    children?: React.ReactNode;
    size?: string;
    textColor?: string;
    fontWeight?: string;
    textAlign?: string;
    selfAlign?: string;
    margin?: string;
    padding?: string;
    position?: string;
};

const DefaultProps: Partial<ParagraphProps> = {
    size: "1rem",
    selfAlign: "center",
    textColor: "#000000",
    fontWeight: "400",
    textAlign: "left",
    margin: "0",
    padding: "0",
    position: "static",
};

const StyledParagraph = styled.p<ParagraphProps>`
    font-size: ${({ size }) => size};
    color: ${({ textColor }) => textColor};
    font-weight: ${({ fontWeight }) => fontWeight};
    text-align: ${({ textAlign }) => textAlign};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    position: ${({ position }) => position};
    align-self: ${({ selfAlign }) => selfAlign};
`;

const Paragraph = ({...props}) => {
    return <StyledParagraph {...DefaultProps} {...props} />;
};

export default Paragraph;