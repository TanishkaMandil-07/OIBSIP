const tempInput = document.getElementById('tempInput');
const unitInput = document.getElementById('unitInput');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

function convertTemperature(value, unit) {
    let celsius, fahrenheit, kelvin;

    switch(unit) {
        case 'celsius':
            celsius = value;
            fahrenheit = (value * 9/5) + 32;
            kelvin = value + 273.15;
            break;
        case 'fahrenheit':
            celsius = (value - 32) * 5/9;
            fahrenheit = value;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            celsius = value - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = value;
            break;
    }

    return {celsius, fahrenheit, kelvin};
}

function updateBackground(celsius) {
    if(celsius < 10) {
        document.body.style.background = "url('https://images.pexels.com/photos/16530777/pexels-photo-16530777.jpeg') no-repeat center center/cover";
        result.style.color = "#00d2ff";
    } else if(celsius >= 10 && celsius <= 25) {
        document.body.style.background = "url('https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg') no-repeat center center/cover";
        result.style.color = "#ffeb3b";
    } else {
        document.body.style.background = "url('https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg') no-repeat center center/cover";
        result.style.color = "#ff3e3e";
    }
}
function updateBackground(fahrenheit) {
    if(fahrenheit < 10) {
        document.body.style.background = "url('https://images.pexels.com/photos/16530777/pexels-photo-16530777.jpeg') no-repeat center center/cover";
        result.style.color = "#00d2ff";
    } else if(fahrenheit >= 10 && fahrenheit <= 25) {
        document.body.style.background = "url('https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg') no-repeat center center/cover";
        result.style.color = "#ffeb3b";
    } else {
        document.body.style.background = "url('https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg') no-repeat center center/cover";
        result.style.color = "#ff3e3e";
    }
}

convertBtn.addEventListener('click', () => {
    const tempValue = parseFloat(tempInput.value);
    const unitValue = unitInput.value;

    if(isNaN(tempValue)) {
        result.textContent = "Enter a valid number!";
        return;
    }

    const converted = convertTemperature(tempValue, unitValue);

    result.innerHTML = `
        Celsius: ${converted.celsius.toFixed(2)} °C <br>
        Fahrenheit: ${converted.fahrenheit.toFixed(2)} °F <br>
        Kelvin: ${converted.kelvin.toFixed(2)} K
    `;

    updateBackground(converted.celsius);
});
