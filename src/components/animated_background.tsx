import styled from "styled-components";

const GeometricBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Shape = styled.div`
  position: absolute;
  width: 10vh;
  height: 10vh;
  border: 2px solid rgba(187, 212, 250, 0.5);
  border-radius: 25%;
  animation: float 20s linear infinite;

  &:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
  &:nth-child(2) { left: 35%; top: 70%; animation-delay: -4s; }
  &:nth-child(3) { left: 65%; top: 40%; animation-delay: -8s; }
  &:nth-child(4) { left: 85%; top: 80%; animation-delay: -12s; }
  &:nth-child(5) { left: 50%; top: 30%; animation-delay: -16s; }
  &:nth-child(6) { left: 25%; top: 45%; animation-delay: -2s; }
  &:nth-child(7) { left: 75%; top: 15%; animation-delay: -6s; }
  &:nth-child(8) { left: 15%; top: 85%; animation-delay: -10s; }

  &:nth-child(odd) {
    animation-direction: reverse;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(100px, 50px) rotate(90deg);
    }
    50% {
      transform: translate(0, 100px) rotate(180deg);
    }
    75% {
      transform: translate(-100px, 50px) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

const AnimatedBackground = () => (
    <GeometricBackground>
        {Array.from({ length: 10 }, (_, i) => (
            <Shape key={i} />
        ))}
    </GeometricBackground>
);

export default AnimatedBackground;