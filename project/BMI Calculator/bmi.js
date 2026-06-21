const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
    results.style.color = '#e74c3c'; 
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
    results.style.color = '#e74c3c';
  } else {
    /* 1. BMI calculation formula decimal ke 2 digit tak */
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let status = '';
    let color = '';

    if (bmi < 18.6) {
      status = 'Underweight 🥪';
      color = '#f1c40f'; 
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status = 'Normal Weight 🎉';
      color = '#2ecc71'; 
    } else {
      status = 'Overweight 🏃‍♂️';
      color = '#e74c3c'; 
    }

    /* 2. Template literals se ek sath HTML aur style inject kiya */
    results.innerHTML = `<span>BMI: ${bmi}</span><br><p style="color: ${color}; font-size: 1.5rem; margin-top: 10px;">${status}</p>`;
  }
});

const themeBtn = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

themeBtn.addEventListener('click', function () {
    /* 3. Button ke emoji text ko condition banakar theme manual switch ki */
    if (themeBtn.innerText === '🌙') {
        body.style.backgroundColor = '#f5f6fa'; 
        body.style.color = '#2f3640';           
        themeBtn.innerText = '☀️';               
    } else {
        body.style.backgroundColor = '#212121'; 
        body.style.color = '#ffffff';           
        themeBtn.innerText = '🌙';               
    }
});
