const CreateButton = document.getElementById('b1') // Button button

CreateButton.addEventListener("click", newButtonEvent)

let number = 1;

function newButtonEvent(){
    const newButton = document.createElement('button');
    newButton.textContent = 'button '+number;
    newButton.className = 'game-button';

    newButton.addEventListener('click', function () {   //Själv Ta bort funtion
        newButton.remove();
    });

    document.getElementById('stackpanel').appendChild(newButton);
    number++;
}   
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const rotatebutton = document.getElementById('b2but') // SPIN BUTTON

rotatebutton.addEventListener("click", Rotate) 

/*function Rotate(){
    const button1 = document.getElementById('b1')
    const button3 = document.getElementById('b3')

    let currentRotation1 = parseInt(button1.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    let currentRotation3 = parseInt(button3.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;

    button1.style.transform = `rotate(${currentRotation1 + 45}deg)`;
    button3.style.transform = `rotate(${currentRotation3 - 45}deg)`;
}   
    */
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function Rotate(){
    const button1 = document.getElementById('b1');
    const button3 = document.getElementById('b3');

    let rot1 = parseInt(button1.dataset.rotation);
    let rot3 = parseInt(button3.dataset.rotation);

    rot1 += 45;
    rot3 -= 45;

    button1.dataset.rotation = rot1;
    button3.dataset.rotation = rot3;

    button1.style.transform = `rotate(${rot1}deg)`;
    button3.style.transform = `rotate(${rot3}deg)`;
}   
