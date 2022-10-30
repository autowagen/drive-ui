import {FC} from "react";

type SensitivityControlProps = {
    value: number
    onChange(value: number): void
}

const SensitivityControl: FC<SensitivityControlProps> = (props) => {
    return <input type="range" min="1" max="100" value={props.value * 100} onChange={event => {
        props.onChange(Number(event.currentTarget.value) / 100);
    }}/>;
}
export default SensitivityControl;
