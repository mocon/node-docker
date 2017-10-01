function localTime(hour, minute, offsetHours) {
    return {
        hour: hour + offsetHours,
        minute: minute
    };
}

export { localTime };
