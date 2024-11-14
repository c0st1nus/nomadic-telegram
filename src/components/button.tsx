import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  alignSelf?: string;
  color?: string;
  borderColor?: string;
  onClick: () => void;
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
  fontSize?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  primary: false,
  alignSelf: 'flex-start',
  color: 'transparent',
  borderColor: 'transparent',
  marginTop: '0',
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontSize: '16px',
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-self: ${({ alignSelf }) => alignSelf};
  background-color: ${({ color }) => color};
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 5px;
  padding: ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    padding
      ? padding
      : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`};
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin: ${({ margin, marginTop, marginRight, marginBottom, marginLeft }) =>
    margin ? margin : `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`};

  ${({ primary }) =>
    primary &&
    css`
      background-color: #ffd700;
      color: white;
      border-color: #8f8e8c;

      &:hover {
        background-color: #ffc107;
        border-color: #ffc107;
      }
    `}

  &:hover {
    background-color: ${({ color }) =>
      color !== 'transparent' ? color : 'rgba(0, 0, 0, 0.1)'};
    border-color: ${({ borderColor }) =>
      borderColor !== 'transparent' ? borderColor : 'rgba(0, 0, 0, 0.1)'};
  }
`;

const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...defaultProps} {...props}>
    {children}
  </StyledButton>
);

export default Button;