const fs = require('fs');
// const chalk = require('chalk-animation');
const {animateString} = require('./animate-string');
const contents = fs. readdirSync('./animals');
animateString(contents.join('\n'));
// const animation = chalk.rainbow(contents.join('\n'));
// setTimeout(() => animation.stop(), 1300);