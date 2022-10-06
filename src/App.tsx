import Layout from "./Layout";
import Joystick from "./Joystick";
import AbortButton from "./AbortButton";
import client from "./client";

const App = () => {
    const onJoystickChange = (steer: number, speed: number) => client.setDrive(steer, speed);
    const onAbortClick = () => client.abort();

    return (
        <Layout joystick={<Joystick onChange={onJoystickChange}/>} abortButton={<AbortButton onClick={onAbortClick}/>}>
            <span>TODO: add some info</span>
        </Layout>
    );
};
export default App
