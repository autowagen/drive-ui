/*
{
  "cpu_freq": 240,
  "free_sketch_space": 1310720,
  "cycle_count": 2556628828,
  "free_heap": 239324,
  "ssid": "FRITZ!Box 7490",
  "ip": "192.168.178.55",
  "hoverboard": {
    "cmd1": 0,
    "cmd2": 0,
    "speedRMeas": 0,
    "speedLMeas": 0,
    "batVoltage": 0,
    "boardTemp": 0,
    "cmdLed": 0
  }
}
 */

export type Info = {}

export type HoverboardInfo = {}


const getInfo = async () => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 800);

    const res = await fetch('/info', {
        signal: controller.signal
    });
    clearTimeout(id);

    if (res.status != 200) {
        console.error(res.statusText);
        console.error(res.text());
        throw new Error('request failed');
    }

    const body: Info = await res.json();

    return body;
};

const InfoClient = {
    getInfo
};
export default InfoClient;
