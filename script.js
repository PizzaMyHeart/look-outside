Notification.requestPermission();


const time = document.getElementsByTagName('time')[0];
	  start = document.getElementById('start'),
	  reset = document.getElementById('reset');
	  
var seconds = 0, minutes = 20, rest_time = 0,
    t;

start.onclick = start_timer;
reset.onclick = reset_timer;



function countdown() {
	start.setAttribute('disabled', 'disabled');
	if (minutes <= 0 && seconds <= 0) {
		console.log('Countdown finished.');
		var rest_notification = new Notification('Look Outside', {
								body: 'Time to give your eyes a rest. Look outside your window (or just close your eyes) for 20 seconds.'
								});
		rest();
		return;
	}
	console.log('countdown started');
	seconds--;
	if (seconds < 0) {
		seconds = 59;
		minutes--;
	}
	time.textContent = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00' )+ 
						' : ' + 
						(seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00');
	console.log(minutes + ':' + seconds);
	start_timer();
}


function rest() {
	if (rest_time >= 20) {
		console.log('Break time\'s over.');
		var work_notification = new Notification('Look Outside', {
									body: 'Back to work, buddy.'
								});
		reset_timer();
		start_timer();
		return;
	}
	console.log(rest_time);
	rest_time++;
	setTimeout(rest, 1000);
}

function start_timer() {
	t = setTimeout(countdown, 1000);
}

function reset_timer() {
	console.log('Reset.')
	clearTimeout(t);
	start.removeAttribute('disabled');
	minutes = 20;
	seconds = 0;
	time.textContent = '20 : 00';
}
