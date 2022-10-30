import {sleep} from "./utils";

type Command = 'set_drive' | 'abort';

type SetDriveData = {
    steer: number
    speed: number
}

type CommandRequest = {
    command: Command,
    data?: any
}

const TIMEOUT = 500;
let lastController: AbortController | undefined = undefined;

const sendRequest = async (info: RequestInfo, init: RequestInit, noCancel: boolean = false) => {
    if (lastController) lastController.abort();

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), TIMEOUT);

    lastController = controller;

    const res = await fetch(info, {
        ...init,
        signal: noCancel ? undefined : controller.signal
    });
    clearTimeout(id);
    lastController = undefined;

    if (res.status != 200) {
        console.error(res.statusText);
        console.error(res.text());
        throw new Error('request failed');
    }
};

const sendCommand = async (command: CommandRequest, noCancel: boolean = false) => {
    await sendRequest('/cmd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(command)
    }, noCancel);
}

const setDrive = async (steer: number, speed: number) => {
    const noCancel = steer == 0 && speed == 0;

    const data: SetDriveData = {
        steer, speed
    }
    return await sendCommand({
        command: 'set_drive',
        data
    }, noCancel);

    /*await sendRequest(`/cmd/set_drive?steer=${steer}&speed=${speed}`, {
        method: 'POST'
    }, noCancel);*/
};

const abort = async () => {
    await sendCommand({
        command: 'abort'
    });
    await sleep(100);
    await sendCommand({
        command: 'abort'
    });
    await sleep(100);
    await sendCommand({
        command: 'abort'
    });
};

const CommandClient = {
    setDrive,
    abort
};
export default CommandClient;
