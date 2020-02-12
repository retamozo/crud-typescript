import styled from "styled-components";

export const Button = styled.button`
  border: ${props =>
    props.primary
      ? "none"
      : props.secondary
      ? "1px solid blue"
      : props.tertiary
      ? "1px solid yellow"
      : "none"};
  font-weight: 600;
  cursor: pointer;
`;
