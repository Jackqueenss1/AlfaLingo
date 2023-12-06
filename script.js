// Adding click event listeners to the bars

document.getElementById('bar1').addEventListener('click', () => showResponse('response1'));
document.getElementById('bar2').addEventListener('click', () => showResponse('response2'));
document.getElementById('bar3').addEventListener('click', () => showResponse('response3'));
document.getElementById('bar4').addEventListener('click', () => showResponse('response4'));


// Function to show response based on the clicked bar
function showResponse(responseId) {
    const responses = document.querySelectorAll('.response');
    responses.forEach(response => {
        response.style.display = 'none';
    });

    const selectedResponse = document.getElementById(responseId);
    selectedResponse.style.display = 'block';
}

  //sound function
function playSound1(){
    var snd = new Audio('A.mp3')//wav is also supported
    snd.play()//plays the sound
}
function playSound2(){
    var snd = new Audio('B.mp3')
    snd.play()
}
function playSound3(){
    var snd = new Audio('C.mp3')
    snd.play()
}
function playSound4(){
    var snd = new Audio('D.mp3')
    snd.play()
}
function playSound5(){
    var snd = new Audio('E.mp3')
    snd.play()
}
function playSound6(){
    var snd = new Audio('F.mp3')//wav is also supported
    snd.play()//plays the sound
}
function playSound7(){
    var snd = new Audio('G.mp3')
    snd.play()
}
function playSound8(){
    var snd = new Audio('H.mp3')
    snd.play()
}
function playSound9(){
    var snd = new Audio('I.mp3')
    snd.play()
}
function playSound10(){
    var snd = new Audio('J.mp3')
    snd.play()
}
