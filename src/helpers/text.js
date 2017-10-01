function clearConsole() {
    return process.stdout.write('\x1B[2J\x1B[0f');
}

function prettyPrint(value) {
    return JSON.stringify(value, null, 4);
}

export {
    clearConsole,
    prettyPrint
};
