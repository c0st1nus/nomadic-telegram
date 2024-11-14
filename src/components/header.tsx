import styled from 'styled-components';

interface HeaderProps {
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
    text_align?: string;
    children: React.ReactNode;
}

const defaultProps: Partial<HeaderProps> = {
    size: '5vh',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
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

const StyledHeader = styled.h1<HeaderProps>`
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

const Header = ({ children, ...props }: HeaderProps) => (
    <StyledHeader {...defaultProps} {...props}>
        {children}
    </StyledHeader>
);

export default Header;