const click = require('./game')
const button = document.getElementById("button");

button.addEventListener('click', function(e) {
    click();
})

