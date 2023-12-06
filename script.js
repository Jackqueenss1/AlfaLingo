// Adding click event listeners to the bars

document.getElementById('bar1').addEventListener('click', () => showResponse('response1'));
document.getElementById('bar2').addEventListener('click', () => showResponse('response2'));
document.getElementById('bar3').addEventListener('click', () => showResponse('response3'));
document.getElementById('bar4').addEventListener('click', () => showResponse('response4'));
document.getElementById('bar5').addEventListener('click', () => showResponse('response5'));

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
function playSound11(){
    var snd = new Audio('K.mp3')//wav is also supported
    snd.play()//plays the sound
}
function playSound12(){
    var snd = new Audio('L.mp3')
    snd.play()
}
function playSound13(){
    var snd = new Audio('M.mp3')
    snd.play()
}
function playSound14(){
    var snd = new Audio('N.mp3')
    snd.play()
}
function playSound15(){
    var snd = new Audio('O.mp3')
    snd.play()
}
function playSound16(){
    var snd = new Audio('P.mp3')//wav is also supported
    snd.play()//plays the sound
}
function playSound17(){
    var snd = new Audio('Q.mp3')
    snd.play()
}
function playSound18(){
    var snd = new Audio('R.mp3')
    snd.play()
}
function playSound19(){
    var snd = new Audio('S.mp3')
    snd.play()
}
function playSound20(){
    var snd = new Audio('T.mp3')
    snd.play()
}
function playSound21(){
    var snd = new Audio('Ump3')//wav is also supported
    snd.play()//plays the sound
}
function playSound22(){
    var snd = new Audio('V.mp3')
    snd.play()
}
function playSound23(){
    var snd = new Audio('W.mp3')
    snd.play()
}
function playSound24(){
    var snd = new Audio('X.mp3')
    snd.play()
}
function playSound25(){
    var snd = new Audio('Y.mp3')
    snd.play()
}
function playSound26(){
    var snd = new Audio('Z.mp3')//wav is also supported
    snd.play()//plays the sound
}
function playSound27(){
    var snd = new Audio('Æ.mp3')
    snd.play()
}
function playSound28(){
    var snd = new Audio('Ø.mp3')
    snd.play()
}
function playSound29(){
    var snd = new Audio('Å.mp3')
    snd.play()
}
