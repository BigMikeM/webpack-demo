let numTimesClicked = 0;

function win() {
    alert('You Win!');
    reset();
}

function reset() {
    numTimesClicked = 0;
}

function click() {
    numTimesClicked++;
    console.log('NumTimesClicked === ', numTimesClicked)
    if (numTimesClicked === 10) win();
}