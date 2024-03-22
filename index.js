$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
    });
});

function updateContent() {
    var userInput = document.getElementById('dynamic-input').value;
    document.getElementById('dynamic-content').textContent = userInput;
}
