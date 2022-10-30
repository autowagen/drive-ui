import Layout from "./Layout";
import Joystick from "./Joystick";
import AbortButton from "./AbortButton";
import client from "./command_client";
import throttle from "lodash.throttle";
import {useEffect, useState} from "react";
import SensitivityControl from "./SensitivityControl";
import InfoOutput from "./InfoOutput";

const App = () => {
    const [steerSensitivity, setSteerSensitivity] = useState(0.25);
    const [speedSensitivity, setSpeedSensitivity] = useState(0.25);

    useEffect(() => {
        document.body.addEventListener('mouseleave', () => {
            console.log('mouseleave => abort()');
            client.abort();
        });
    }, []);

    const handleJoystickChange = throttle(
        (steer: number, speed: number) => client.setDrive(steer, speed),
        100
    );
    const handleAbortClick = () => client.abort();

    return (
        <Layout sensitivityControls={<>
            <div>
                <span>steer</span>
                <SensitivityControl value={steerSensitivity} onChange={setSteerSensitivity}/>
            </div>
            <div>
                <span>speed</span>
                <SensitivityControl value={speedSensitivity} onChange={setSpeedSensitivity}/>
            </div>
        </>}
                joystick={<Joystick steerSensitivity={steerSensitivity} speedSensitivity={speedSensitivity}
                                    onChange={handleJoystickChange}/>}
                abortButton={<AbortButton onClick={handleAbortClick}/>}>
            <InfoOutput/>
        </Layout>
    );
};
export default App
