import styled from "styled-components";
import {FC} from "react";

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

type AbortButtonProps = {
    onClick(): void
}

const AbortButton: FC<AbortButtonProps> = (props) => {
    return <StyledButton onClick={props.onClick}>HALT STOP!</StyledButton>
};
export default AbortButton;
