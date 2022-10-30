import {FC, useEffect, useState} from "react";
import info_client, {Info} from "./info_client";

type InfoOutputProps = {};

const InfoOutput: FC<InfoOutputProps> = (props) => {
    const [info, setInfo] = useState<Info>();

    useEffect(() => {
        const interval = setInterval(() => {
            info_client.getInfo()
                .then(setInfo)
                .catch(console.error);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <pre>{JSON.stringify(info, null, 4)}</pre>
};
export default InfoOutput;
