var second = 0
var minute = 0
var hour = 0
var intervalWatch = 0

function format (number) {
    if (number < 10) {
        return '0'+number
    } else {
        return number
    }
}

function runner () {
    stopwatch
    intervalWatch = setInterval(stopwatch, 1000)
}

function stopper () {
    clearInterval(intervalWatch)
}

function reset () {
    hour = 0
    minute = 0
    second = 0
    clearInterval(intervalWatch)
    document.getElementById('textWatch').innerText = '00:00:00'
}

function stopwatch () {
    second ++
    if (second == 60) {
        minute ++
        second = 0
    }
    if (minute == 60) {
        hour ++
        minute = 0
    }
    document.getElementById('textWatch').innerText = `${format(hour)}:${format(minute)}:${format(second)}`
}