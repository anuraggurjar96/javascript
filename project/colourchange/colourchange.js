/*console.log("Anurag")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button)
{
    console.log(button);
    button.addEventListener('click' , function (e)
{
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey')
    {
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white')
    {
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow')
    {
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue')
    {
        body.style.backgroundColor = e.target.id;
    }
});
});*/


// Advans Version ....
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const picker = document.querySelector('#picker');
const resetButton = document.querySelector('#reset');

// Function 1: Smart Text Color (Light background par dark text, dark par light text)
function adjustTextColor(color) {
    // Agar background white ya yellow hai toh text black kar do, nahi toh white
    if (color === 'white' || color === 'yellow' || color === '#ffffff' || color === '#ffff00') {
        body.style.color = '#000000';
    } else {
        body.style.color = '#ffffff';
    }
}

// Function 2: Color Apply karne aur LocalStorage me save karne ke liye
function changeBackground(color) {
    body.style.backgroundColor = color;
    adjustTextColor(color);
    localStorage.setItem('userTheme', color); // Browser me color save ho gaya
}

// Step 1: Page load hote hi check karo ki kya pehle se koi color saved hai?
const savedColor = localStorage.getItem('userTheme');
if (savedColor) {
    changeBackground(savedColor);
}

// Step 2: Normal Buttons ka Click Event (Purana logic, but optimized)
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        changeBackground(e.target.id);
    });
});

// Step 3: Custom Color Picker Event (Jab user palette se color chunega)
picker.addEventListener('input', function (e) {
    changeBackground(e.target.value); // e.target.value se hex code (#ffffff) milta hai
});

// Step 4: Reset Button Event (Default theme par wapas jaane ke liye)
resetButton.addEventListener('click', function () {
    body.style.backgroundColor = '#212121';
    body.style.color = '#ffffff';
    localStorage.removeItem('userTheme'); // Saved color ko delete kiya
});
