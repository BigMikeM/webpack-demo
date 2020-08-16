//Our goal is to clean up our global scope so how can we do that?
//One way is we can wrap our game code in a "module" or function that
//gets immediately invoked (IIFE - Immediately Invoked Function Expression)
//ANOTHER (more familiar) way is to import/export modules like we do with node/express right?

//const gameModule = (function () {
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
    console.log('NumTimesClicked === ', numTimesClicked);
    if (numTimesClicked === 10) win();
  }

  export default click;

  //what do we want to return so we can access the functions we need in our game
  /*return {
      click
  }
})();*/
