import styled from "styled-components";
import {useEffect, useRef} from "react";
import nipplejs from 'nipplejs';

const Box = styled.div`
  background: #ccc;
`;

const Joystick = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    // const nippleRef = useRef(null);

    useEffect(() => {
        console.log('box', boxRef.current);
        const options = {
            zone: boxRef.current as HTMLElement,
            dynamicPage: true
        }
        const nipple = nipplejs.create(options);
        console.log('nipple', nipple);

        // nipple.on()

        return () => {
            console.log('destroy');
            nipple.destroy();
        };
    }, []);

    return <Box ref={boxRef}/>
};
export default Joystick;
