import Layout from "./Layout";
import Joystick from "./Joystick";
import AbortButton from "./AbortButton";

const App = () => (
    <Layout joystick={<Joystick/>} abortButton={<AbortButton/>}>
        <span>TODO: add some info</span>
    </Layout>
);
export default App
