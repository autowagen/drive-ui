import styled from "styled-components";
import {FC, useEffect, useRef} from "react";
import nipplejs from 'nipplejs';

const Box = styled.div`
  background: #ccc;
`;

type JoystickProps = {
    steerSensitivity: number
    speedSensitivity: number
    onChange(steer: number, speed: number): void
}

const Joystick: FC<JoystickProps> = (props) => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            zone: boxRef.current as HTMLElement,
            dynamicPage: true,
            size: 250
        }
        const nipple = nipplejs.create(options);

        nipple.on('end', () => {
            props.onChange(0, 0);
        });
        nipple.on('move', (e, data) => {
            const steer = Math.floor(data.vector.x * 1000) * props.steerSensitivity;
            const speed = Math.floor(data.vector.y * 1000) * props.speedSensitivity;

            props.onChange(steer, speed);
        });

        return () => {
            nipple.destroy();
        };
    }, [props.steerSensitivity, props.speedSensitivity]);

    return <Box ref={boxRef}/>
};
export default Joystick;
