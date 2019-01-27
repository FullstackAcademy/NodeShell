const pwd = require('./cwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

function log(output) {
    process.stdout.write(output);
}

log('prompt > ');

process.stdin.on('data', (data) => {
    // handling input commands and arguments
    const cmd = data.toString().trim().split(' ');
    let command = cmd[0];
    let args = cmd.slice(1);
    let executes = {
        pwd,
        ls,
        cat,
        curl
    }

    if (executes[command]) {
        if (args.length === 0) {
            executes[command]();
        }
        for (arg of args) {
            executes[command](arg);
        }
    }

    log('prompt > ');
})