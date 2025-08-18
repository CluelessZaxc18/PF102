function convertToNumber() {
            const inputValue = document.getElementById('inputValue').value;
            const convertedValue = Number(inputValue); 
            const resultElement = document.getElementById('conversionResult');
            resultElement.textContent = `Converted to Number: ${convertedValue} (Type: ${typeof convertedValue})`;
        }

        function convertToString() {
            const inputValue = document.getElementById('inputValue').value;
            const convertedValue = String(inputValue); 
            const resultElement = document.getElementById('conversionResult');
            resultElement.textContent = `Converted to String: "${convertedValue}" (Type: ${typeof convertedValue})`;
        }

        function convertToBoolean() {
            const inputValue = document.getElementById('inputValue').value;
            const convertedValue = Boolean(inputValue); 
            const resultElement = document.getElementById('conversionResult');
            resultElement.textContent = `Converted to Boolean: ${convertedValue} (Type: ${typeof convertedValue})`;
        }