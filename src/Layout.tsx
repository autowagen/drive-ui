import styled, {createGlobalStyle} from "styled-components";
import {FC, PropsWithChildren, ReactNode} from "react";

const GlobalStyles = createGlobalStyle`
  html, body {
    overflow: hidden;
    padding: 0;
    margin: 0;

    font-family: sans-serif;
  }
  
  body {
    user-select: none;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

const SensitivityControlContainer = styled.div`
  & > * {
    display: flex;
    height: 40px;
    align-items: center;
  }
  
  & > * > :nth-child(1) {
    width: 60px;
  }
  
  & > * > :nth-child(2) {
    flex-grow: 1;
  }
`;

const JoystickContainer = styled.div`
  height: 33%;
  display: flex;
  
  & > * {
    flex-grow: 1;
  }
`;

const AbortButtonContainer = styled.div`
  height: 80px;
  display: flex;
`;

type LayoutProps = {
    sensitivityControls: ReactNode
    joystick: ReactNode
    abortButton: ReactNode
}

const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
    return <>
        <GlobalStyles/>
        <Container>
            <ContentContainer>
                {props.children}
            </ContentContainer>
            {props.sensitivityControls && <SensitivityControlContainer>{props.sensitivityControls}</SensitivityControlContainer>}
            {props.joystick && <JoystickContainer>{props.joystick}</JoystickContainer>}
            {props.abortButton && <AbortButtonContainer>{props.abortButton}</AbortButtonContainer>}
        </Container>
    </>;
};
export default Layout;
