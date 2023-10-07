import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
console.log(savedTime);
if(savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
}