import styled from "styled-components";

const StyledButton = styled.button`
  flex-grow: 1;
  font-size: 26px;
  color: white;
  background-color: red;
  border: 0;

  &:active {
    background: yellow;
  }
`;

const AbortButton = () => {
    return <StyledButton>HALT STOP!</StyledButton>
};
export default AbortButton;
