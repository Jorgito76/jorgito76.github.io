// Get inputs: Temp and Speed, and store them in variables
const temperature = parseFloat(document.getElementById('temperature').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

// Processing: Begin calculations from inputs. 
let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16))
+ (0.4275 * temperature * Math.pow(speed, 0.16));

windchill = Math.round(windchill);

// Output: Handle scenarios and output the results. 
if (temperature <= 50 && speed > 3) {
    document.getElementById('chill').textContent = "Wind Chill is "+ windchill +"\xB0F";
}
else {
    document.getElementById('chill').textContent = "No Wind Chill Today"
}