var os = require('os');
var timeConvert = require('../modules/timeConvert');
var colors = require('colors');

function getOSinfo(){
    var type = os.type();
    var release = os.release();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
         type = 'Windows';
    }
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.rainbow, type);
    console.log('Release:'.zebra, release);
    console.log('CPU model:'.america, cpu);
    console.log('Uptime:'.green, timeConvert.conventer(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.blue, userInfo.homedir);            
}

exports.print = getOSinfo;