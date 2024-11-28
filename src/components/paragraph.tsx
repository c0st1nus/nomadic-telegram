import styled from 'styled-components';

interface ParagraphProps {
    size?: string;
    textAlign?: 'left' | 'center' | 'right';
    color?: string;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    margin?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    padding?: string;
    children: React.ReactNode;
    text_align?: string;
}

const defaultProps: Partial<ParagraphProps> = {
    size: '1rem',
    textAlign: 'left',
    color: 'black',
    position: 'static',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    text_align: 'left',
};

const StyledParagraph = styled.p<ParagraphProps>`
    position: ${({ position }) => position};
    font-size: ${({ size }) => size};
    text-align: ${({ textAlign }) => textAlign};
    color: ${({ color }) => color};
    margin: ${({ margin, marginTop, marginBottom, marginLeft, marginRight }) =>
        margin ? margin : `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`};
    padding: ${({ padding, paddingTop, paddingBottom, paddingLeft, paddingRight }) =>
        padding ? padding : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`};
    z-index: 3;
    text-align: ${({ text_align }) => text_align};
`;

const Paragraph = ({ children, ...props }: ParagraphProps) => (
    <StyledParagraph {...defaultProps} {...props}>
        {children}
    </StyledParagraph>
);

export default Paragraph;