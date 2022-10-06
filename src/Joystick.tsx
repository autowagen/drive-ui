import styled from "styled-components";
import {FC, useEffect, useRef} from "react";
import nipplejs from 'nipplejs';

const Box = styled.div`
  background: #ccc;
`;

type JoystickProps = {
    onChange(steer: number, speed: number): void
}

const Joystick : FC<JoystickProps> = (props) => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            zone: boxRef.current as HTMLElement,
            dynamicPage: true
        }
        const nipple = nipplejs.create(options);

        nipple.on('end', () => {
            props.onChange(0, 0);
        });
        nipple.on('move', (e, data) => {
            // console.log(data);
            // console.log(data.vector);

            const steer = Math.floor(data.vector.x * 1000);
            const speed = Math.floor(data.vector.y * 1000);

            console.log(steer, speed);
            props.onChange(steer, speed);
        });

        return () => {
            nipple.destroy();
        };
    }, []);

    return <Box ref={boxRef}/>
};
export default Joystick;
