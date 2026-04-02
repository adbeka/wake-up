let alarmTime = null;
let alarmInterval = null;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    if (alarmTime) {
        const currentTime = `${hours}:${minutes}`;
        if (currentTime === alarmTime) {
            wakeUp();
        }
    }
}

function wakeUp() {
    alert('Wake up! It\'s time!');
    // You can add audio here, but for now, alert
    clearAlarm();
}

function setAlarm() {
    const timeInput = document.getElementById('alarm-time').value;
    if (timeInput) {
        alarmTime = timeInput;
        document.getElementById('alarm-status').textContent = `Alarm set for ${alarmTime}`;
    }
}

function clearAlarm() {
    alarmTime = null;
    document.getElementById('alarm-time').value = '';
    document.getElementById('alarm-status').textContent = 'No alarm set';
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();

// Event listeners
document.getElementById('set-alarm').addEventListener('click', setAlarm);
document.getElementById('clear-alarm').addEventListener('click', clearAlarm);