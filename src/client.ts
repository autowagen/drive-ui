type Command = 'set_drive' | 'abort';

type SetDriveData = {
    steer: number
    speed: number
}

type CommandRequest = {
    command: Command,
    data?: any
}

const sendCommand = async (command: CommandRequest) => {
    const res = await fetch('/cmd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(command)
    });
    if (res.status != 200) {
        console.error(res.statusText);
        console.error(res.text());
        throw new Error('request failed');
    }
}

const setDrive = async (steer: number, speed: number) => {
    const data: SetDriveData = {
        steer, speed
    }
    return await sendCommand({
        command: 'set_drive',
        data
    });
};

const abort = async () => {
    return await sendCommand({
        command: 'abort'
    });
};

const getInfo = () => {
};

const Client = {
    setDrive,
    abort,
    getInfo
};
export default Client;
